#assumes postgre db called yomi with schema filled out exists

import psycopg2
import os
import xml.etree.ElementTree as ET
from dotenv import load_dotenv

load_dotenv(dotenv_path="dev.env")

xml_file = "JMdict_e.xml"
tree = ET.parse(xml_file)
root = tree.getroot()

print(os.getenv("DB_NAME"))

conn = psycopg2.connect(
    dbname=os.getenv("DB_NAME"),
    user=os.getenv("DB_USER"),
    host=os.getenv("DB_HOST"),
    port=os.getenv("DB_PORT")
)
cur = conn.cursor()

for entry in root.findall("entry"):
    kanji_list = [k.text for k in entry.findall("k_ele/keb")]
    reading_list = [r.text for r in entry.findall("r_ele/reb")]
    meaning_list = [s.text for s in entry.findall("sense/gloss")]

    reading_text = ", ".join(reading_list) if reading_list else None
    meaning_text = "; ".join(meaning_list)

    for kanji in kanji_list:
        cur.execute("""
                        INSERT INTO flashcards (kanji, reading, meaning)
                        VALUES (%s, %s, %s)
                        ON CONFLICT (kanji, reading, meaning) DO NOTHING
                    """, (kanji, reading_text, meaning_text))

conn.commit()
cur.close()
conn.close()
print("Loaded dict into db")