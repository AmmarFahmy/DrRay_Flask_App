import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO get_report (prediction, probability) VALUES (?, ?)",
            ('Brain Tumor Positive', '0.95')
            )

cur.execute("INSERT INTO get_report (prediction, probability) VALUES (?, ?)",
            ('Brain Tumor Negative', '0.67')
            )

connection.commit()
connection.close()