const express = require('express');
const router = express.Router();
const database = require('../database/database');

//Obtener todos los estudios
router.get('/tattooStudio', (req, res) => {

    database.query('SELECT * FROM tattooStudio', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });

});


module.exports = router;