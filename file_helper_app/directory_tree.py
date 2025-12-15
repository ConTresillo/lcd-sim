from pathlib import Path
from config import IGNORE

class DirectoryTree:
    def __init__(self, root: Path):
        self.root = root

    def tree(self, path: Path = None, prefix: str = ""):
        path = path or self.root
        entries = [e for e in sorted(path.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
                   if e.name not in IGNORE]
        lines = []
        for idx, entry in enumerate(entries):
            connector = "└── " if idx == len(entries) - 1 else "├── "
            lines.append(prefix + connector + entry.name)
            if entry.is_dir():
                extension = "    " if idx == len(entries) - 1 else "│   "
                lines += self.tree(entry, prefix + extension)
        return lines
