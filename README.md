# سند (Sanad) — Bilingual Donation Case Tracker

A mobile-first, Arabic/English donation page. Visitors browse open cases
(food, money, medicine, work, shelter), tap one to read the full story and
donate, and can see monthly giving totals pulled straight from an Excel file.
Everything is split into plain data files so you can manage it without
touching the design code.

---

## 1. Folder structure

```
donation-platform/
├── index.html                  ← the page itself (don't usually need to touch)
├── css/style.css                ← all styling
├── js/app.js                    ← all behavior + the CONFIG block (links, text)
├── data/
│   ├── cases.json                ← ⭐ your 10 (or more) donation cases
│   └── monthly-donations.xlsx    ← ⭐ monthly totals per category, edit in Excel
├── images/cases/
│   └── case-01.jpg … case-10.jpg ← ⭐ one photo per case
└── scripts/                     ← optional Python helpers (see §6)
```

The three ⭐ items are the ones you'll actually edit week to week.

---

## 2. Adding / editing a case

Open `data/cases.json`. It's a list of case objects — copy one and change the
values to add an 11th case:

```json
{
  "id": 11,
  "category": "food",
  "title_en": "Short English title",
  "title_ar": "عنوان قصير بالعربية",
  "summary_en": "One sentence shown on the card.",
  "summary_ar": "جملة واحدة تظهر في البطاقة.",
  "details_en": "Longer story shown when the case is opened.",
  "details_ar": "القصة الكاملة تظهر عند فتح الحالة.",
  "location_en": "Cairo, Egypt",
  "location_ar": "القاهرة، مصر",
  "goal": 5000,
  "raised": 0,
  "currency": "EGP",
  "donors": 0,
  "image": "images/cases/case-11.jpg",
  "status": "active"
}
```

Notes:
- `category` must be exactly one of: `food`, `money`, `medicine`, `work`, `shelter`.
- `status` is `"active"` or `"completed"` — completed cases get a "Funded" badge
  and the progress bar switches to the teal "done" color.
- The homepage totals (raised, active cases, donors…) are **calculated
  automatically** from this file — you never edit them by hand.
- Delete a case by deleting its block. Keep the file valid JSON (commas
  between objects, no trailing comma after the last one).

### Adding a real photo
Drop a photo at `images/cases/case-11.jpg` (or `.png` — just update the
`image` path to match) sized roughly 900×600 or larger, landscape. To replace
a placeholder, keep the exact filename, e.g. overwrite `case-01.jpg` with your
real photo — no other file needs to change.

---

## 3. Updating monthly statistics (the Excel file)

Open `data/monthly-donations.xlsx` in Excel, Google Sheets, or Numbers.
Keep the header row exactly as: `Month, Food, Money, Medicine, Work, Shelter`.
Each row is one month, amounts in EGP:

| Month   | Food | Money | Medicine | Work | Shelter |
|---------|------|-------|----------|------|---------|
| 2026-06 | 5350 | 5500  | 4400     | 3000 | 11650   |

- `Month` must stay in `YYYY-MM` format (the chart turns it into "June" / "يونيو" automatically).
- Add a new row each month, save the file, and re-upload it to `data/` — the
  chart on the site re-reads it on every page load, no code changes needed.
- The site reads this file directly in the visitor's browser, so there's no
  database or backend to maintain.

---

## 4. Editing links and on-page text

Open `js/app.js` and look at the top:

```js
const CONFIG = {
  whatsappGroup: "https://wa.me/201000000000",
  telegramChannel: "https://t.me/your_channel",
  contactLink: "mailto:hello@example.com",
  donateWhatsapp: "https://wa.me/201000000000",
};
```

Replace these with your real WhatsApp/Telegram/contact links — that's what
powers the "Join the community" section and the "Donate" button on every case
(it opens WhatsApp with the case name pre-filled, ready to send).

All on-page English/Arabic copy (headings, button labels, etc.) lives in the
`I18N` object just below `CONFIG`, in the same file, if you want to reword
anything.

---

## 5. Previewing locally before you push

Opening `index.html` by double-clicking it will show the layout, but the
browser will block `fetch()` of `cases.json` and the `.xlsx` file (a security
rule for local files). Instead, run a tiny local server from the project
folder:

```bash
cd donation-platform
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. (Any other static server — VS Code's
"Live Server" extension, `npx serve`, etc. — works too.)

---

## 6. Deploying on GitHub Pages

1. Create a new GitHub repository and push this whole folder to it (the
   contents of `donation-platform/`, not the folder itself, should sit at the
   repo root — i.e. `index.html` should be at the repo's top level).
2. In the repo: **Settings → Pages → Build and deployment → Source:
   "Deploy from a branch"**, branch `main`, folder `/ (root)`. Save.
3. GitHub gives you a URL like `https://yourname.github.io/your-repo/` within
   a minute or two.
4. From then on, managing the site is just editing `cases.json` /
   `monthly-donations.xlsx` / photos and pushing — no build step.

`scripts/` (Python) regenerates the placeholder photos and the starter Excel
file if you ever want more placeholders; it needs `pip install pillow
openpyxl`. It's not required for the site to run and can be deleted safely.

---

## 7. Ideas for later

- **Structured pledges**: swap the WhatsApp donate button for a Google Form
  per case if you want pledges logged automatically instead of via chat.
- **Multiple photos per case**: add an `images: []` array per case and a tiny
  swipe gallery in the modal.
- **Search bar** above the filter chips for when the case list grows past ~20.
- **Auto-archive**: a small script that moves `"status": "completed"` cases
  into a `data/archive.json` after 60 days, so the active grid stays short.
- **Open Graph tags** per case (and a server-rendered share page) so links
  shared in WhatsApp/Telegram show the case photo and amount raised.
- **RTL-aware print stylesheet** if you ever want a printable donor receipt.
