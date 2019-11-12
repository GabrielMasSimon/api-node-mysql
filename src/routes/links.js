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
        else
            res.send(err);
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