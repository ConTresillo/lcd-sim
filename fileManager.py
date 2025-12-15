import os
import sys
import shutil
import json
import re

try:
    import pyperclip
    CLIPBOARD = True
except ImportError:
    CLIPBOARD = False

# ================= USER CONTROLS =================
MODE = "read"  # "read" | "readAll" | "write"

FILES = [
    # e.g. "ToggleSwitch.tsx" or "components/controls" or absolute path
    "src/components/controls",
    "Theme.ts", "neonBlue.ts"
]

NEW_CONTENT = []  # cleared automatically
OUTPUT_FILE = "read_output.txt"  # where read outputs are stored
# =================================================

PROJECT_ROOT = os.path.join("workspace", "lcd-simulator")
BACKUP_DIR = ".file_manager_backup"
LOOKUP_FILE = ".file_lookup.json"

# -------------------- LOOKUP --------------------
LOOKUP = {}
DUPLICATES = set()

def build_lookup():
    """Scan PROJECT_ROOT and build a filename -> relative path mapping."""
    for root, _, files in os.walk(PROJECT_ROOT):
        for f in files:
            if f.startswith("."):
                continue
            rel_path = os.path.relpath(os.path.join(root, f), PROJECT_ROOT)
            if f not in LOOKUP:
                LOOKUP[f] = rel_path
            else:
                if isinstance(LOOKUP[f], list):
                    LOOKUP[f].append(rel_path)
                else:
                    LOOKUP[f] = [LOOKUP[f], rel_path]

def load_or_build_lookup():
    """Load lookup from JSON, or build and save it if missing."""
    global LOOKUP
    if os.path.exists(LOOKUP_FILE):
        with open(LOOKUP_FILE, "r", encoding="utf-8") as f:
            LOOKUP = json.load(f)
    else:
        build_lookup()
        with open(LOOKUP_FILE, "w", encoding="utf-8") as f:
            json.dump(LOOKUP, f, indent=2)

# -------------------- FILE RESOLUTION --------------------
def resolve_file(name):
    """Return full path for a file or directory name."""
    # 1️⃣ Already absolute path
    if os.path.exists(name):
        return name

    # 2️⃣ Relative to project root
    rel_path = os.path.join(PROJECT_ROOT, name)
    if os.path.exists(rel_path):
        return rel_path

    # 3️⃣ Lookup table (for files only)
    if name in LOOKUP:
        path = LOOKUP[name]
        if isinstance(path, list):
            return os.path.join(PROJECT_ROOT, path[0])
        return os.path.join(PROJECT_ROOT, path)

    # 4️⃣ Recursive search for directory or filename prefix
    for root, dirs, files in os.walk(PROJECT_ROOT):
        if name in dirs:
            return os.path.join(root, name)
        for f in files:
            if f == name or f.startswith(name + "."):
                return os.path.join(root, f)

    # Not found
    return None

# -------------------- BACKUP --------------------
def ensure_backup():
    os.makedirs(BACKUP_DIR, exist_ok=True)

def backup(path):
    ensure_backup()
    safe = path.replace("/", "__").replace("\\", "__")
    shutil.copy2(path, os.path.join(BACKUP_DIR, safe))

# -------------------- READ HELPERS --------------------
def read_file(path):
    """Read a file skipping comment lines."""
    with open(path, "r", encoding="utf-8") as f:
        lines = [l for l in f if not l.strip().startswith(("#", "//"))]
    rel = os.path.relpath(path, PROJECT_ROOT)
    return f"\n📄 {rel}\n" + "-" * 80 + "\n" + "".join(lines)

def read_directory(dir_path):
    """Recursively read all files in a directory."""
    blocks = []
    for root, _, files in os.walk(dir_path):
        for f in files:
            full = os.path.join(root, f)
            blocks.append(read_file(full))
    return blocks

# -------------------- CLEAR NEW_CONTENT --------------------
def clear_new_content():
    """Clear NEW_CONTENT list in this script automatically."""
    script_path = __file__
    with open(script_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    inside_block = False

    for line in lines:
        if not inside_block and re.match(r"\s*NEW_CONTENT\s*=", line):
            new_lines.append("NEW_CONTENT = []  # cleared automatically\n")
            if "[" in line and "]" not in line:
                inside_block = True
            continue
        if inside_block:
            if "]" in line:
                inside_block = False
            continue
        new_lines.append(line)

    with open(script_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

# -------------------- MODES --------------------
def save_and_copy_output(output_blocks):
    """Save the combined code to OUTPUT_FILE and copy to clipboard."""
    final = "\n".join(output_blocks)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(final)
    if CLIPBOARD:
        pyperclip.copy(final)
    print(f"[✓] Output saved to {OUTPUT_FILE} and copied to clipboard")

def read_mode():
    clear_new_content()
    load_or_build_lookup()
    output = []

    for item in FILES:
        full_path = resolve_file(item)
        if full_path is None:
            print(f"[X] File or directory not found: {item}")
            continue
        if os.path.isdir(full_path):
            output.extend(read_directory(full_path))
        else:
            output.append(read_file(full_path))

    save_and_copy_output(output)

def read_all_mode():
    """Read all files in the given directory."""
    clear_new_content()
    if len(FILES) != 1:
        print("[X] readAll requires exactly ONE directory")
        sys.exit(1)

    # Resolve directory first
    target = resolve_file(FILES[0])
    if target is None:
        # Try to resolve as relative to project root if lookup fails
        potential = os.path.join(PROJECT_ROOT, FILES[0])
        if os.path.isdir(potential):
            target = potential
        else:
            print(f"[X] readAll target not found: {FILES[0]}")
            sys.exit(1)

    if not os.path.isdir(target):
        print(f"[X] readAll target must be a directory: {target}")
        sys.exit(1)

    output = read_directory(target)
    save_and_copy_output(output)

def write_mode():
    if len(FILES) != len(NEW_CONTENT):
        print("[X] FILES and NEW_CONTENT length mismatch")
        sys.exit(1)
    load_or_build_lookup()
    for item, content in zip(FILES, NEW_CONTENT):
        path = resolve_file(item)
        if path is None:
            path = os.path.join(PROJECT_ROOT, item)
            os.makedirs(os.path.dirname(path), exist_ok=True)
        if os.path.exists(path):
            backup(path)
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[✓] Wrote {os.path.relpath(path, PROJECT_ROOT)}")
    clear_new_content()

# -------------------- ENTRY --------------------
if MODE == "read":
    read_mode()
elif MODE == "readAll":
    read_all_mode()
elif MODE == "write":
    write_mode()
else:
    print("[X] Invalid MODE")
