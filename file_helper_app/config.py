from pathlib import Path

# ROOT_DIR points to parent of parent of this script, then workspace/lcd-simulator
ROOT_DIR = Path(__file__).parent.parent / "workspace" / "lcd-simulator"
BACKUP_DIR = ROOT_DIR / ".file_manager_backup"
LOOKUP_FILE = ROOT_DIR / ".file_lookup.json"
OUTPUT_FILE = ROOT_DIR / "read_output.txt"

IGNORE = {".git", "node_modules", "__pycache__", ".DS_Store", ".venv", ".idea"}
