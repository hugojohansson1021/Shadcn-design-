#!/usr/bin/env python3
"""Download a library's source from GitHub into design-library/elements/<slug>/source/.

Usage:
  fetch_source.py <owner/repo> <subdir-or-.> <dest-dir> [--branch main]

Fetches LICENSE, README.md, package.json and everything under src/ (text
files only; images, videos, demos and build output are skipped). Refuses to
continue if the repo has no license file, since we only vendor code we are
allowed to keep.
"""

import json
import os
import sys
import urllib.request

SKIP_EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".mp4", ".webm", ".mov", ".ico", ".woff", ".woff2", ".ttf", ".otf"}
TOP_FILES = {"LICENSE", "LICENSE.md", "LICENSE.txt", "NOTICE", "NOTICE.md", "README.md", "package.json"}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "design-library-fetch"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    branch = "main"
    if "--branch" in sys.argv:
        branch = sys.argv[sys.argv.index("--branch") + 1]
        args.remove(branch)
    if len(args) != 3:
        print(__doc__)
        sys.exit(2)
    repo, subdir, dest = args
    prefix = "" if subdir in (".", "") else subdir.strip("/") + "/"

    tree = json.loads(get(f"https://api.github.com/repos/{repo}/git/trees/{branch}?recursive=1"))
    wanted = []
    for t in tree.get("tree", []):
        p = t["path"]
        if t["type"] != "blob" or not p.startswith(prefix):
            continue
        rel = p[len(prefix):]
        if os.path.splitext(rel)[1].lower() in SKIP_EXT:
            continue
        if rel in TOP_FILES or rel.startswith("src/"):
            wanted.append(rel)

    if not any(r.startswith("LICENSE") for r in wanted):
        print(f"no LICENSE found in {repo}/{prefix}; not downloading")
        sys.exit(1)

    for rel in sorted(wanted):
        out = os.path.join(dest, rel)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        with open(out, "wb") as f:
            f.write(get(f"https://raw.githubusercontent.com/{repo}/{branch}/{prefix}{rel}"))
    print(f"{len(wanted)} files -> {dest}")


if __name__ == "__main__":
    main()
