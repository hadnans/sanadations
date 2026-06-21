#!/usr/bin/env python3
"""Generates placeholder photos for each donation case.
Replace these files later with real photos using the SAME filename
(e.g. case-01.jpg) and the site will pick them up automatically.
"""
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 900, 600
FONT_DIR = "/usr/share/fonts/truetype/dejavu/"
F_BOLD = FONT_DIR + "DejaVuSans-Bold.ttf"
F_REG = FONT_DIR + "DejaVuSans.ttf"

# category -> (base color, accent color)
CATS = {
    "food":     ("#7A8B4A", "#9DAE6C"),
    "money":    ("#C9952C", "#E0B65A"),
    "medicine": ("#3E7C8C", "#63A3B2"),
    "work":     ("#8B5E34", "#AD7E55"),
    "shelter":  ("#6B4E71", "#8E6E94"),
}

CASES = [
    (1, "food"), (2, "food"),
    (3, "money"), (4, "money"),
    (5, "medicine"), (6, "medicine"),
    (7, "work"), (8, "work"),
    (9, "shelter"), (10, "shelter"),
]

def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def lerp(a, b, t):
    return tuple(int(a[i] + (b[i]-a[i])*t) for i in range(3))

def make_gradient(base, accent):
    top = hex2rgb(base)
    bot = lerp(hex2rgb(base), (0, 0, 0), 0.35)
    img = Image.new("RGB", (W, H), top)
    px = img.load()
    for y in range(H):
        t = y / H
        c = lerp(top, bot, t)
        for x in range(W):
            px[x, y] = c
    return img

def draw_lattice(draw, color, alpha_img):
    # subtle octagon/star lattice pattern in a corner, mashrabiya-inspired
    step = 46
    r, g, b = hex2rgb(color)
    line_color = (255, 255, 255, 28)
    ad = ImageDraw.Draw(alpha_img)
    for y in range(-step, H + step, step):
        for x in range(-step, W + step, step):
            s = step * 0.42
            pts = [
                (x - s, y - s*0.4), (x - s*0.4, y - s),
                (x + s*0.4, y - s), (x + s, y - s*0.4),
                (x + s, y + s*0.4), (x + s*0.4, y + s),
                (x - s*0.4, y + s), (x - s, y + s*0.4),
            ]
            ad.polygon(pts, outline=line_color, width=2)

def draw_camera_icon(draw, cx, cy, scale, color):
    w, h = 120 * scale, 86 * scale
    body = [cx - w/2, cy - h/2 + 10*scale, cx + w/2, cy + h/2]
    draw.rounded_rectangle(body, radius=10*scale, outline=color, width=max(3, int(5*scale)))
    bump = [cx - w*0.22, cy - h/2 - 8*scale, cx + w*0.05, cy - h/2 + 12*scale]
    draw.rounded_rectangle(bump, radius=6*scale, outline=color, width=max(3, int(5*scale)))
    lens_r = h * 0.30
    draw.ellipse([cx-lens_r, cy+6*scale-lens_r, cx+lens_r, cy+6*scale+lens_r],
                 outline=color, width=max(3, int(5*scale)))
    inner_r = lens_r * 0.45
    draw.ellipse([cx-inner_r, cy+6*scale-inner_r, cx+inner_r, cy+6*scale+inner_r],
                 outline=color, width=max(2, int(3*scale)))
    fr = 6 * scale
    draw.ellipse([cx+w*0.32-fr, cy-h*0.18-fr, cx+w*0.32+fr, cy-h*0.18+fr], outline=color, width=max(2,int(3*scale)))

def make_case_image(number, cat, path):
    base, accent = CATS[cat]
    img = make_gradient(base, accent).convert("RGBA")

    # lattice overlay
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_lattice(ImageDraw.Draw(overlay), base, overlay)
    img = Image.alpha_composite(img, overlay)

    draw = ImageDraw.Draw(img)

    # soft vignette panel behind icon for legibility
    panel = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(panel)
    pdraw.ellipse([W/2-170, H/2-150, W/2+170, H/2+150], fill=(0, 0, 0, 60))
    panel = panel.filter(ImageFilter.GaussianBlur(30))
    img = Image.alpha_composite(img, panel)
    draw = ImageDraw.Draw(img)

    draw_camera_icon(draw, W/2, H/2 - 18, 1.5, (255, 255, 255, 235))

    # case number, top-left like a ledger tag
    f_num = ImageFont.truetype(F_BOLD, 30)
    tag = f"CASE #{number:02d}"
    tb = draw.textbbox((0, 0), tag, font=f_num)
    tw, th = tb[2]-tb[0], tb[3]-tb[1]
    pad = 14
    draw.rounded_rectangle([28, 26, 28+tw+pad*2, 26+th+pad*2], radius=8, fill=(255, 255, 255, 235))
    draw.text((28+pad, 26+pad-tb[1]), tag, font=f_num, fill=hex2rgb(base))

    # category pill, top-right
    f_cat = ImageFont.truetype(F_BOLD, 24)
    cat_label = cat.upper()
    cb = draw.textbbox((0, 0), cat_label, font=f_cat)
    cw, ch = cb[2]-cb[0], cb[3]-cb[1]
    pad2 = 12
    x2 = W - 28
    draw.rounded_rectangle([x2-cw-pad2*2, 26, x2, 26+ch+pad2*2], radius=8, fill=(0, 0, 0, 95))
    draw.text((x2-cw-pad2, 26+pad2-cb[1]), cat_label, font=f_cat, fill=(255, 255, 255, 255))

    # bottom hint text
    f_hint = ImageFont.truetype(F_BOLD, 34)
    hint = "ADD PHOTO HERE"
    hb = draw.textbbox((0, 0), hint, font=f_hint)
    hw = hb[2]-hb[0]
    draw.text(((W-hw)/2, H - 92), hint, font=f_hint, fill=(255, 255, 255, 235))

    f_sub = ImageFont.truetype(F_REG, 20)
    sub = f"replace images/cases/case-{number:02d}.jpg with your photo"
    sb = draw.textbbox((0, 0), sub, font=f_sub)
    sw = sb[2]-sb[0]
    draw.text(((W-sw)/2, H - 50), sub, font=f_sub, fill=(255, 255, 255, 190))

    img.convert("RGB").save(path, "JPEG", quality=87)

if __name__ == "__main__":
    import os
    out_dir = "/home/claude/donation-platform/images/cases"
    os.makedirs(out_dir, exist_ok=True)
    for number, cat in CASES:
        path = f"{out_dir}/case-{number:02d}.jpg"
        make_case_image(number, cat, path)
        print("made", path)
