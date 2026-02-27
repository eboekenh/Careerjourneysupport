# PDF Comparison Tool

Ein intelligentes Tool zum Vergleichen zweier PDF-Dokumente mit detaillierter Änderungsverfolgung.

## Features

- 🔍 **Intelligenter Textvergleich** mit Fuzzy-Matching
- 📊 **Excel-Export** mit detaillierten Änderungen
- 🖥️ **GUI** für einfache Bedienung
- 🎯 **Wort-für-Wort Diff** mit Markup
- 🧹 **Automatische Kopf-/Fußzeilenentfernung**
- 📝 **Änderungstypen**: Modified, Added, Removed

## Installation

### Voraussetzungen

```bash
pip install pymupdf openpyxl
```

## Verwendung

### GUI-Modus (empfohlen)

```bash
python pdf_comparison_tool.py --gui
```

Oder einfach ohne Argumente:

```bash
python pdf_comparison_tool.py
```

### Kommandozeilen-Modus

```bash
python pdf_comparison_tool.py old_document.pdf new_document.pdf -o changes.xlsx --min-sim 0.70
```

#### Parameter

- `old_pdf`: Pfad zur alten PDF-Datei
- `new_pdf`: Pfad zur neuen PDF-Datei
- `-o, --output`: Ausgabedatei (Standard: `pdf_diff.xlsx`)
- `--min-sim`: Minimale Ähnlichkeit für Block-Matching (Standard: 0.70)
- `--gui`: GUI-Modus starten

## Ausgabe

Das Tool erstellt eine Excel-Datei mit zwei Arbeitsblättern:

### 1. Summary
- Übersicht über beide PDFs
- Anzahl der Blöcke
- Statistiken (Modified, Added, Removed, Unchanged)

### 2. Changes
Detaillierte Liste aller Änderungen mit:
- **change_type**: Art der Änderung (modified/added/removed)
- **similarity**: Ähnlichkeitswert (0-1)
- **old_page / new_page**: Seitenzahlen
- **old_block_id / new_block_id**: Block-IDs
- **old_snippet / new_snippet**: Textausschnitte
- **diff_markup**: Wort-für-Wort Unterschiede
  - `[-gelöschter Text-]`
  - `{+hinzugefügter Text+}`

## Funktionsweise

1. **Text-Extraktion**: Extrahiert Text aus allen Seiten beider PDFs
2. **Segmentierung**: Teilt Text in logische Blöcke/Absätze
3. **Fuzzy-Matching**: Vergleicht Blöcke mit kombiniertem Ansatz:
   - Token-basierte Jaccard-Ähnlichkeit
   - Zeichenfolgen-Ähnlichkeit (SequenceMatcher)
4. **Alignment**: Ordnet ähnliche Blöcke einander zu
5. **Diff-Generierung**: Erstellt Wort-für-Wort Unterschiede
6. **Excel-Export**: Schreibt Ergebnisse in formatierte Excel-Datei

## Anwendungsfälle

- Versionskontrolle von Dokumenten
- Vertragsprüfung
- Technische Spezifikationen vergleichen
- Dokumentänderungen nachverfolgen
- Qualitätssicherung

## Hinweise

- Funktioniert am besten mit text-basierten PDFs (keine gescannten Bilder)
- Die Ähnlichkeitsschwelle kann angepasst werden (0.0 - 1.0)
- Unveränderte Blöcke werden nicht im Excel-Report angezeigt (für bessere Übersicht)

## Lizenz

Open Source - Frei verwendbar

## Autor

Erstellt für Data Circle Team Hamburg
