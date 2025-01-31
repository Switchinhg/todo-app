import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./db/todo_data.db")

db.run(`
    CREATE TABLE IF NOT EXISTS notas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,  
        done BOOLEAN DEFAULT 0,
        deleted BOOLEAN DEFAULT 0,
        lastEdited TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
    )
  `, (err) => {
    if (err) return console.error("Error creando tabla:", err.message)
    console.log("Database creada");
  })

  export default db