DROP TABLE IF EXISTS posts;

CREATE TABLE get_report (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date_and_time DATETIME NOT NULL DEFAULT (STRFTIME('%d-%m-%Y   %H:%M', 'NOW','localtime')),
    prediction TEXT NOT NULL,
    probability TEXT NOT NULL
);