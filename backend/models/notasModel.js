import db from "../db/db.js"

/* Busca todas las notas en la db y las envía */
const getAll = (res) =>{
    const sql = "SELECT * FROM notas WHERE deleted = 0"; 

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ ok: false, error: err.message });
        }
        res.json({ ok: true, notas: rows });
    });
}

/* Busca una nota en especifico */
const getSpecific = (nota_id, res) =>{
    const sql = "SELECT * FROM notas WHERE id = ?"; 

    db.get(sql, [nota_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ ok: false, error: err.message });
        }
        res.json({ ok: true, nota: rows });
    });
}

/* Crea la nota y devuelve el id */
const createNota = (nota, res) => {
    const sql = "INSERT INTO notas (title, description) VALUES (?, ?)";
    
    db.run(sql, [nota.title, nota.description], function (err) {
        if (err) {
            return res.status(500).json({ ok: false, error: err.message });
        }
        res.json({ ok: true, id: this.lastID });
    });
}

/* Le hace update a la nota y la pone como completada */
const updateNota = (id, res) =>{
    const sql = "UPDATE notas SET done = 1 WHERE id = ?";

    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({ ok: false, error: err.message });
        }
        res.json({ ok: true });
    });
}

/* Borra nota */
const deleteNota = (id, res) =>{
    const sql = "UPDATE notas SET deleted = 1 WHERE id = ?";

    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({ ok: false, error: err.message });
        }
        res.json({ ok: true });
    });
}


export default {
    getAll,
    getSpecific,
    createNota,
    updateNota,
    deleteNota
}