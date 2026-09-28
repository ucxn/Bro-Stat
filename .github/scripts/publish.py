#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "Source"
RESERVED = ROOT / "Reserved"
FILES = [
    "ASUS-1.user.js",
    "H3C-TX_1801.user.js",
    "Huawei-1.user.js",
    "Mi-WiFi_RD.user.js",
    "TP-L1.user.js",
    "Tenda-1.user.js",
]
PATTERN = re.compile(r"/\*\s*@BroTech-Reserved\s+([A-Za-z0-9_.-]+)\s*\*/")

def split_header(data: bytes):
    # Preserve the root script's metadata literally, including its line endings.
    m = re.search(rb"(?m)^// ==/UserScript==[ \t]*\r?$", data)
    if not m:
        raise RuntimeError("UserScript metadata terminator not found")
    end = m.end()
    if data[end:end + 2] == b"\r\n":
        end += 2
    elif data[end:end + 1] == b"\n":
        end += 1
    return data[:end], data[end:]

def expand(text: str, stack=()):
    def repl(m):
        name = m.group(1)
        if name in stack:
            raise RuntimeError("Reserved fragment cycle: " + " -> ".join(stack + (name,)))
        path = RESERVED / name
        if not path.is_file():
            raise RuntimeError(f"Reserved fragment not found: {name}")
        return expand(path.read_text(encoding="utf-8"), stack + (name,)).rstrip("\n")
    while PATTERN.search(text):
        text = PATTERN.sub(repl, text)
    return text

for name in FILES:
    root_path = ROOT / name
    source_path = SOURCE / name
    root_text = root_path.read_bytes()
    source_text = source_path.read_bytes()
    root_header, _ = split_header(root_text)
    _, source_body = split_header(source_text)
    worked = root_header + expand(source_body.decode("utf-8")).encode("utf-8")
    if worked != root_text:
        root_path.write_bytes(worked)
        print(f"built: {name}")
    else:
        print(f"unchanged: {name}")
