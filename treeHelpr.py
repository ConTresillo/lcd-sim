import os
from pathlib import Path

# -------- CONFIG --------
ROOT_DIR = Path(__file__).parent  # project root
IGNORE = {
    ".git",
    "node_modules",
    "__pycache__",
    ".DS_Store",
    ".venv",
    ".idea"
}
# ------------------------


def tree(path: Path, prefix: str = ""):
    entries = [e for e in sorted(path.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
               if e.name not in IGNORE]

    for idx, entry in enumerate(entries):
        connector = "└── " if idx == len(entries) - 1 else "├── "
        print(prefix + connector + entry.name)

        if entry.is_dir():
            extension = "    " if idx == len(entries) - 1 else "│   "
            tree(entry, prefix + extension)


def main():
    print(f"{ROOT_DIR.name}/")
    tree(ROOT_DIR)


if __name__ == "__main__":
    main()
