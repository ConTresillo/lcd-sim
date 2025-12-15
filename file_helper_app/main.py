import tkinter as tk
from tkinter import scrolledtext, messagebox
from file_manager import FileManager
from directory_tree import DirectoryTree
from config import ROOT_DIR, IGNORE
SKIPPED_MODULES = IGNORE
import os, subprocess, platform

class AutocompleteEntry(tk.Entry):
    def __init__(self, lookup_list, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.lookup_list = sorted(lookup_list)
        self.var = tk.StringVar()
        self.config(textvariable=self.var)
        self.var.trace("w", self.changed)
        self.listbox_up = False

    def changed(self, *_):
        if self.var.get() == '':
            if self.listbox_up:
                self.lb.destroy()
                self.listbox_up = False
        else:
            matches = [f for f in self.lookup_list if f.lower().startswith(self.var.get().lower())]
            if matches:
                if not self.listbox_up:
                    self.lb = tk.Listbox()
                    self.lb.bind("<<ListboxSelect>>", self.on_select)
                    self.lb.place(x=self.winfo_x(), y=self.winfo_y()+self.winfo_height())
                    self.listbox_up = True
                self.lb.delete(0, tk.END)
                for m in matches:
                    self.lb.insert(tk.END, m)
            else:
                if self.listbox_up:
                    self.lb.destroy()
                    self.listbox_up = False

    def on_select(self, event):
        if self.listbox_up:
            idx = self.lb.curselection()
            if idx:
                value = self.lb.get(idx)
                self.var.set(value)
                self.lb.destroy()
                self.listbox_up = False

class FileHelperGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("File Helper App")
        self.fm = FileManager()
        self.fm.load_or_build_lookup()
        self.lookup_list = [f for f in self.fm.lookup.keys() if f not in SKIPPED_MODULES]
        self._setup_widgets()

    def _setup_widgets(self):
        frame = tk.Frame(self.root)
        frame.pack(padx=10, pady=10, fill="x")

        tk.Label(frame, text="MODE:").pack(side="left")
        self.mode_var = tk.StringVar(value="read")
        tk.OptionMenu(frame, self.mode_var, "read","readAll","write","tree","open").pack(side="left")

        tk.Label(frame, text="FILES (comma separated):").pack(side="left")
        self.files_entry = tk.Entry(frame, width=50)
        self.files_entry.pack(side="left")

        tk.Label(frame, text="Autocomplete:").pack(side="left")
        self.auto_entry = AutocompleteEntry(self.lookup_list, frame, width=40)
        self.auto_entry.pack(side="left")
        tk.Button(frame, text="Add", command=self.add_to_csv).pack(side="left")

        tk.Label(self.root, text="NEW_CONTENT (for write mode, separate blocks with ---):").pack()
        self.new_content_text = scrolledtext.ScrolledText(self.root, width=120, height=10)
        self.new_content_text.pack(padx=10, pady=10)

        tk.Label(self.root, text="Output:").pack()
        self.output = scrolledtext.ScrolledText(self.root, width=120, height=20)
        self.output.pack(padx=10, pady=10)

        tk.Button(frame, text="Execute", command=self.execute).pack(side="left")

    def add_to_csv(self):
        entry = self.auto_entry.get().strip()
        if entry:
            current = self.files_entry.get().strip()
            if current:
                updated = current + ", " + entry
            else:
                updated = entry
            self.files_entry.delete(0, tk.END)
            self.files_entry.insert(0, updated)
            self.auto_entry.delete(0, tk.END)

    def execute(self):
        mode = self.mode_var.get()
        files = [f.strip() for f in self.files_entry.get().split(",") if f.strip()]
        new_content_raw = self.new_content_text.get("1.0","end").strip()
        new_contents = [s.strip() for s in new_content_raw.split("---")] if new_content_raw else []

        out = []
        try:
            if mode=="read":
                out = self.fm.read_mode(files)
            elif mode=="readAll":
                out = self.fm.read_all_mode(files)
            elif mode=="write":
                self.fm.write_mode(files,new_contents)
                out = ["[✓] Write completed"]
            elif mode=="tree":
                dt = DirectoryTree(ROOT_DIR)
                out = [ROOT_DIR.name] + dt.tree()
            elif mode=="open":
                for f in files:
                    path = self.fm.resolve_file(f)
                    if path is None:
                        out.append(f"[X] File not found: {f}")
                        continue
                    try:
                        if platform.system()=="Windows":
                            os.startfile(path)
                        elif platform.system()=="Darwin":
                            subprocess.call(["open", path])
                        else:
                            subprocess.call(["xdg-open", path])
                        out.append(f"[✓] Opened: {path}")
                    except Exception as e:
                        out.append(f"[X] Failed to open {path}: {e}")
            else:
                out.append(f"[X] Invalid MODE {mode}")
        except Exception as e:
            out.append(f"[X] Error: {e}")

        self.output.delete("1.0","end")
        self.output.insert("1.0","\n".join(out))

if __name__=="__main__":
    root = tk.Tk()
    app = FileHelperGUI(root)
    root.mainloop()
