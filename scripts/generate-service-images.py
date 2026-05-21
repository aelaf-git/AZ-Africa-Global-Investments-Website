#!/usr/bin/env python3
"""Generate abstract service card images (no people) for public/services/."""

from pathlib import Path

from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent.parent / "public" / "services"
W, H = 800, 500

GREEN = (22, 163, 74)
GREEN_DARK = (21, 128, 61)
GOLD = (250, 204, 21)
WHITE = (255, 255, 255)
MINT = (240, 253, 244)
CREAM = (254, 252, 232)


def base_canvas(draw: ImageDraw.ImageDraw, variant: int) -> None:
    """Soft branded gradient backgrounds — no photography."""
    if variant == 0:
        for y in range(H):
            t = y / H
            c = (
                int(MINT[0] * (1 - t) + WHITE[0] * t),
                int(MINT[1] * (1 - t) + WHITE[1] * t),
                int(MINT[2] * (1 - t) + WHITE[2] * t),
            )
            draw.line([(0, y), (W, y)], fill=c)
    elif variant == 1:
        for y in range(H):
            t = y / H
            c = (
                int(CREAM[0] * (1 - t) + WHITE[0] * t),
                int(CREAM[1] * (1 - t) + WHITE[1] * t),
                int(CREAM[2] * (1 - t) + WHITE[2] * t),
            )
            draw.line([(0, y), (W, y)], fill=c)
    else:
        draw.rectangle([0, 0, W, H], fill=WHITE)
        draw.polygon([(W, 0), (W, H), (W - 220, H)], fill=MINT)
        draw.polygon([(0, H), (180, H), (0, H - 140)], fill=CREAM)

    # Accent circles
    draw.ellipse([W - 160, -40, W + 60, 160], fill=(*GREEN, 30) if False else (220, 252, 231))
    draw.ellipse([-80, H - 200, 120, H + 20], fill=(254, 249, 195))


def draw_investment(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 0)
    # Abstract skyline + growth bars
    for i, h in enumerate([80, 120, 95, 150, 110, 170]):
        x = 120 + i * 85
        d.rectangle([x, H - 80 - h, x + 55, H - 80], fill=GREEN)
    d.polygon([(520, 200), (620, 280), (720, 180), (680, 180), (620, 240), (560, 160)], fill=GOLD)
    d.line([(500, 300), (750, 120)], fill=GREEN_DARK, width=6)


def draw_diplomatic(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 1)
    # Connected nodes (partnerships)
    nodes = [(200, 250), (400, 180), (600, 250), (400, 340)]
    for a, b in [(0, 1), (1, 2), (1, 3), (0, 3), (2, 3)]:
        d.line([*nodes[a], *nodes[b]], fill=GREEN_DARK, width=4)
    for x, y in nodes:
        d.ellipse([x - 28, y - 28, x + 28, y + 28], fill=GREEN)
        d.ellipse([x - 14, y - 14, x + 14, y + 14], fill=WHITE)
    d.ellipse([350, 200, 450, 300], outline=GOLD, width=5)


def draw_resource(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 2)
    # Project timeline / bars
    d.rounded_rectangle([140, 140, 340, 360], radius=16, fill=GREEN, outline=GREEN_DARK, width=3)
    for i, w in enumerate([180, 140, 200, 160]):
        y = 170 + i * 42
        d.rectangle([360, y, 360 + w, y + 24], fill=GOLD if i % 2 else GREEN)
    d.ellipse([580, 160, 700, 280], outline=GREEN, width=8)


def draw_policy(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 0)
    # Abstract balance / document stack
    d.rectangle([180, 120, 320, 380], fill=WHITE, outline=GREEN_DARK, width=4)
    for y in range(150, 340, 36):
        d.line([(200, y), (300, y)], fill=GREEN, width=3)
    d.line([(400, 260), (520, 200)], fill=GREEN_DARK, width=8)
    d.line([(400, 260), (520, 320)], fill=GREEN_DARK, width=8)
    d.ellipse([395, 248, 425, 278], fill=GOLD)
    d.polygon([(600, 150), (720, 150), (660, 320)], fill=(*GREEN,))


def draw_business_dev(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 1)
    # Growth curve
    pts = [(100, 350), (220, 300), (340, 260), (460, 200), (580, 150), (700, 100)]
    d.line(pts, fill=GREEN, width=10)
    for x, y in pts[1:]:
        d.ellipse([x - 10, y - 10, x + 10, y + 10], fill=GOLD)
    d.rectangle([120, 360, 680, 380], fill=GREEN_DARK)


def draw_asset(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 2)
    # Grid of blocks (portfolio)
    for row in range(3):
        for col in range(4):
            x = 160 + col * 130
            y = 140 + row * 90
            shade = GREEN if (row + col) % 2 == 0 else GREEN_DARK
            d.rounded_rectangle([x, y, x + 100, y + 70], radius=8, fill=shade)
    d.arc([500, 120, 700, 320], 200, 340, fill=GOLD, width=12)


def draw_media(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 0)
    # Broadcast waves + frame
    d.rounded_rectangle([160, 130, 420, 370], radius=20, fill=GREEN_DARK)
    d.rounded_rectangle([190, 160, 390, 340], radius=12, fill=WHITE)
    for r in range(3):
        d.arc([450 + r * 40, 180, 550 + r * 40, 320], 300, 60, fill=GOLD, width=5)
    d.rectangle([200, 280, 380, 310], fill=GOLD)


def draw_financing(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 1)
    # Abstract coins / rings
    for i, (cx, cy, rad) in enumerate([(220, 250, 70), (400, 220, 90), (580, 260, 65)]):
        color = GOLD if i == 1 else GREEN
        d.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=color, outline=GREEN_DARK, width=4)
        d.ellipse([cx - rad // 2, cy - rad // 2, cx + rad // 2, cy + rad // 2], fill=WHITE)
    d.rectangle([150, 360, 650, 400], fill=MINT, outline=GREEN, width=2)


def draw_security(d: ImageDraw.ImageDraw) -> None:
    base_canvas(d, 2)
    # Shield
    shield = [(400, 100), (520, 140), (520, 280), (400, 400), (280, 280), (280, 140)]
    d.polygon(shield, fill=GREEN)
    d.polygon(
        [(400, 150), (480, 175), (480, 265), (400, 340), (320, 265), (320, 175)],
        fill=WHITE,
    )
    d.polygon([(400, 200), (440, 260), (400, 300), (360, 260)], fill=GOLD)
    d.rectangle([140, 320, 260, 360], fill=GREEN_DARK)
    d.rectangle([540, 320, 660, 360], fill=GREEN_DARK)


DRAWERS = {
    "investment": draw_investment,
    "diplomatic": draw_diplomatic,
    "resource": draw_resource,
    "policy": draw_policy,
    "business-dev": draw_business_dev,
    "asset": draw_asset,
    "media": draw_media,
    "financing": draw_financing,
    "security": draw_security,
}


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for sid, draw_fn in DRAWERS.items():
        img = Image.new("RGB", (W, H), WHITE)
        draw_fn(ImageDraw.Draw(img))
        path = OUT / f"{sid}.jpg"
        img.save(path, format="JPEG", quality=88, optimize=True)
        print(f"Wrote {path} ({path.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
