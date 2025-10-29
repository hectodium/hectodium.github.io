#!/usr/bin/env python

import sys
import os

def add_class(_class:str|bool) -> str:
    return ' class="' + _class + '"' if _class else ""

CELL_SEP:str = ";"
FORM_SEP:str = "$"

files:list[str] = os.listdir()
files.remove(sys.argv[0])

tables:set[str] = set([name.split(".")[0] for name in files])

for table in tables:

    csv_path:str = table + ".csv"
    js_path:str = table + ".js"

    csv = open(csv_path, "r")
    csv_rows:list[str] = csv.readlines()
    csv.close()

    first_row_list = csv_rows[0].split(CELL_SEP)
    first_cell = first_row_list[0]

    if FORM_SEP in first_cell:
        first_cell_value:str = first_cell.split(FORM_SEP)[0]
        table_class:str|bool = first_cell.split(FORM_SEP)[1]
        first_row_list[0] = first_cell_value
        csv_rows[0] = CELL_SEP.join(first_row_list)
    else:
        table_class:str|bool = False

    # table_class:str|bool = first_cell.split(FORM_SEP)[1] if FORM_SEP in first_cell else False

    html:list[str] = []
    html.append("const table = `\n")
    html.append(f"<table{add_class(table_class)}>\n")

    for row_index, row in enumerate(csv_rows):
        html.append("\t<tr>")

        tag:str = "th" if row_index == 0 else "td"
        row = row.replace("\n","")
        last_cell_empty:bool = False

        cells:list[str] = row.split(CELL_SEP)

        for cell in cells:
            cell_empty:bool = cell == ""

            value:str = cell.split(FORM_SEP)[0]
            cell_class:str|bool = cell.split(FORM_SEP)[1] if FORM_SEP in cell else False

            html.append(f"{"" if last_cell_empty and cell_empty else "\n\t\t"}")
            html.append(f"<{tag}{add_class(cell_class)}>")
            html.append(value)
            html.append(f"</{tag}>")

            last_cell_empty:bool = cell_empty

        html.append("\n\t</tr>\n")

    html.append("</table>\n")
    html.append("`;\n")

    js = open(js_path, "w", newline="")
    js.write("".join(html))
    js.close()

    print(f"{table} js file created successfully")
print("all csv files converted into html")
