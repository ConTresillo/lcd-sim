import os
import sys
import shutil
import json
import re
from pathlib import Path
from config import ROOT_DIR, BACKUP_DIR, LOOKUP_FILE, OUTPUT_FILE

try:
    import pyperclip

    CLIPBOARD = True
except ImportError:
    CLIPBOARD = False

LOOKUP = {}
DUPLICATES = set()


class FileManager:
    def __init__(self):
        self.lookup = {}
        self.duplicates = set()

    def build_lookup(self):
        for root, _, files in os.walk(ROOT_DIR):
            for f in files:
                if f.startswith("."):
                    continue
                rel_path = os.path.relpath(os.path.join(root, f), ROOT_DIR)
                if f not in self.lookup:
                    self.lookup[f] = rel_path
                else:
                    if isinstance(self.lookup[f], list):
                        self.lookup[f].append(rel_path)
                    else:
                        self.lookup[f] = [self.lookup[f], rel_path]

    def load_or_build_lookup(self):
        if LOOKUP_FILE.exists():
            with open(LOOKUP_FILE, "r", encoding="utf-8") as f:
                self.lookup = json.load(f)
        else:
            self.build_lookup()
            with open(LOOKUP_FILE, "w", encoding="utf-8") as f:
                json.dump(self.lookup, f, indent=2)

    def resolve_file(self, name):
        p = Path(name)
        if p.exists(): return p
        candidate = ROOT_DIR / name
        if candidate.exists(): return candidate
        if name in self.lookup:
            path = self.lookup[name]
            if isinstance(path, list):
                return ROOT_DIR / path[0]
            return ROOT_DIR / path
        for root, dirs, files in os.walk(ROOT_DIR):
            if name in dirs:
                return Path(root) / name
            for f in files:
                if f == name or f.startswith(name + "."):
                    return Path(root) / f
        return None

    def ensure_backup(self):
        BACKUP_DIR.mkdir(parents=True, exist_ok=True)

    def backup(self, path):
        self.ensure_backup()
        safe = str(path).replace("/", "__").replace("\\", "__")
        shutil.copy2(path, BACKUP_DIR / safe)

    def clear_new_content(self):
        script_path = __file__
        with open(script_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
        new_lines = []
        inside_block = False
        for line in lines:
            if not inside_block and re.match(r'\s*NEW_CONTENT\s*=', line):
                new_lines.append("NEW_CONTENT = []  # cleared automatically\n")
                if "[" in line and "]" not in line:
                    inside_block = True
                continue
            if inside_block:
                if "]" in line: inside_block = False
                continue
            new_lines.append(line)
        with open(script_path, "w", encoding="utf-8") as f:
            f.writelines(new_lines)

    def read_file(self, path):
        with open(path, "r", encoding="utf-8") as f:
            lines = [l for l in f if not l.strip().startswith(('#', '//'))]
        rel = os.path.relpath(path, ROOT_DIR)
        return f"\n📄 {rel}\n" + "-" * 80 + "\n" + "".join(lines)

    def read_directory(self, dir_path):
        blocks = []
        for root, _, files in os.walk(dir_path):
            for f in files:
                full = Path(root) / f
                blocks.append(self.read_file(full))
        return blocks

    def save_output(self, output_blocks):
        final = "\n".join(output_blocks)
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(final)
        if CLIPBOARD:
            pyperclip.copy(final)


    def read_mode(self, files):
        """Read selected files or directories."""
        self.clear_new_content()
        self.load_or_build_lookup()
        output = []
        for item in files:
            full_path = self.resolve_file(item)
            if full_path is None:
                continue
            if full_path.is_dir():
                output.extend(self.read_directory(full_path))
            else:
                output.append(self.read_file(full_path))
        self.save_output(output)
        return output


    def read_all_mode(self, files):
        """Read all files inside a directory (exactly one)."""
        self.clear_new_content()
        if len(files) != 1:
            raise ValueError("readAll requires exactly ONE directory")
        target = self.resolve_file(files[0])
        if target is None or not target.is_dir():
            raise FileNotFoundError(f"{files[0]} not found or not a directory")
        output = self.read_directory(target)
        self.save_output(output)
        return output


    def write_mode(self, files, new_contents):
        """Write content to files."""
        if len(files) != len(new_contents):
            raise ValueError("FILES and NEW_CONTENT length mismatch")
        self.load_or_build_lookup()
        for item, content in zip(files, new_contents):
            path = self.resolve_file(item)
            if path is None:
                path = ROOT_DIR / item
                path.parent.mkdir(parents=True, exist_ok=True)
            if path.exists():
                self.backup(path)
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
        self.clear_new_content()
