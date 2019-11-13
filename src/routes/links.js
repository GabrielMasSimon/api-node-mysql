const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', (req,res) => {
            res.send('Welcome to Tattoo page');
});

//Obtener todos los tatuajes
router.get('/tatuajes', (req, res) => {
    database.query('SELECT * FROM tatuaje', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else{
            console.log(err)
            res.send(err);
        }

    });
});

//Obtener un tatuaje por id
router.get('/tatuaje/:id', (req, res) => {
    database.query('SELECT * FROM tatuaje WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else{
            console.log(err);
            res.send(err);
        }

    })
});

//Eliminar un tatuaje por id
router.delete('/tatuaje/:id', (req, res) => {
    database.query('DELETE FROM tatuaje WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully.');
        else{
            console.log(err);
            res.send('Error al eliminar el tatuaje ' + [req.params.id] );
        }

    })
});

//Insert an employees
router.post('/nuevoTatuaje', (req, res) => {

    let tatuaje = req.body;

    if (tatuaje.img == undefined)
        tatuaje.img = null;

    if (tatuaje.descripcion == undefined)
        tatuaje.descripcion = null

    if (tatuaje.tatuador == undefined)
        tatuaje.tatuador = null

    if (tatuaje.color == undefined)
        tatuaje.color = null;

    let query = `INSERT INTO tatuaje (img, descripcion, tatuador, color) VALUES(?,?,?,?)`;
    let values = [tatuaje.img, tatuaje.descripcion, tatuaje.tatuador, tatuaje.color];

    database.query(query, values, (err, rows, fields) => {
        if (!err)
            res.send('Nuevo tatuaje creado con exito')
        else{
            console.log(err)
            res.send("Error al crear el nuevo tatuaje")
        }
    });
});

//Obtener todos los tatuadores
router.get('/tatuadores', (req, res) => {
    database.query('SELECT * FROM tatuador', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });
});


//Obtener todos los estudios
router.get('/estudios', (req, res) => {
    database.query('SELECT * FROM estudio', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });
});


module.exports = router;