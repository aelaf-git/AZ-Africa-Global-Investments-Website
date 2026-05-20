#!/usr/bin/env python3
"""Resize and compress brand images for web delivery."""

from pathlib import Path

from PIL import Image

PUBLIC = Path(__file__).resolve().parent.parent / "public"
ORIGINALS = PUBLIC / "originals"

# max dimension (px) at ~2x display size
TARGETS = {
    "az-logo.png": {"max_size": 256, "webp_quality": 82, "format": "png"},
    "az-main.png": {"max_size": 1024, "webp_quality": 85, "format": "png"},
    "about-us.png": {"max_size": 1024, "webp_quality": 85, "format": "jpeg"},
}


def fit_within(img: Image.Image, max_size: int) -> Image.Image:
    w, h = img.size
    scale = min(max_size / w, max_size / h, 1.0)
    if scale >= 1.0:
        return img
    new_size = (max(1, int(w * scale)), max(1, int(h * scale)))
    return img.resize(new_size, Image.Resampling.LANCZOS)


def to_rgb(img: Image.Image) -> Image.Image:
    if img.mode == "RGBA":
        background = Image.new("RGB", img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        return background
    return img.convert("RGB")


def save_fallback(img: Image.Image, dest: Path, fmt: str) -> None:
    if fmt == "jpeg":
        to_rgb(img).save(dest, format="JPEG", quality=85, optimize=True, progressive=True)
    else:
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGBA")
        img.save(dest, format="PNG", optimize=True, compress_level=9)


def main() -> None:
    ORIGINALS.mkdir(exist_ok=True)

    for filename, opts in TARGETS.items():
        src = PUBLIC / filename
        if not src.exists():
            src = ORIGINALS / filename
        if not src.exists():
            print(f"skip missing: {filename}")
            continue

        backup = ORIGINALS / filename
        if not backup.exists():
            backup.write_bytes(src.read_bytes())
            print(f"backed up: {backup}")

        img = Image.open(src)
        resized = fit_within(img, opts["max_size"])

        fmt = opts.get("format", "png")
        stem = filename.replace(".png", "")
        fallback_ext = ".jpg" if fmt == "jpeg" else ".png"
        fallback_path = PUBLIC / f"{stem}{fallback_ext}"
        webp_path = PUBLIC / f"{stem}.webp"

        save_fallback(resized, fallback_path, fmt)
        (to_rgb(resized) if fmt == "jpeg" else resized).save(
            webp_path, format="WEBP", quality=opts["webp_quality"], method=6
        )

        if fallback_path.name != filename and (PUBLIC / filename).exists():
            (PUBLIC / filename).unlink()

        print(
            f"{filename}: {img.size[0]}x{img.size[1]} -> {resized.size[0]}x{resized.size[1]} | "
            f"{fallback_ext[1:]} {fallback_path.stat().st_size // 1024}KB | "
            f"webp {webp_path.stat().st_size // 1024}KB"
        )


if __name__ == "__main__":
    main()
