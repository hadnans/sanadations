#!/usr/bin/env python3
"""Builds data/monthly-donations.xlsx — edit this file in Excel/Sheets,
keep the same column headers, and the website's chart updates automatically.
"""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.utils import get_column_letter

months = [
    "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12",
    "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06",
]

# sample figures in EGP — replace with your real monthly totals per category
data = {
    "Food":     [2200, 2600, 2400, 3100, 3400, 4200, 3800, 4100, 4600, 4300, 4900, 5350],
    "Money":    [1500, 1800, 2100, 1700, 2300, 2600, 2900, 2500, 3100, 3300, 3500, 5500],
    "Medicine": [900,  1100, 1000, 1400, 1600, 2100, 1800, 2000, 2200, 2400, 2300, 4400],
    "Work":     [600,  700,  900,  850,  1100, 1300, 1200, 1500, 1700, 1600, 1900, 3000],
    "Shelter":  [1800, 1600, 2000, 2400, 2600, 3200, 2900, 3300, 3600, 3400, 3800, 11650],
}

wb = Workbook()
ws = wb.active
ws.title = "Monthly Donations"

headers = ["Month", "Food", "Money", "Medicine", "Work", "Shelter"]
ws.append(headers)

header_fill = PatternFill("solid", fgColor="0E4B43")
header_font = Font(color="FFFFFF", bold=True)
for col_idx, h in enumerate(headers, start=1):
    c = ws.cell(row=1, column=col_idx)
    c.fill = header_fill
    c.font = header_font
    c.alignment = Alignment(horizontal="center")

for i, m in enumerate(months):
    row = [m] + [data[cat][i] for cat in ["Food", "Money", "Medicine", "Work", "Shelter"]]
    ws.append(row)

# widths
widths = [12, 10, 10, 12, 10, 10]
for i, w in enumerate(widths, start=1):
    ws.column_dimensions[get_column_letter(i)].width = w

ws.freeze_panes = "A2"

wb.save("/home/claude/donation-platform/data/monthly-donations.xlsx")
print("saved monthly-donations.xlsx")
