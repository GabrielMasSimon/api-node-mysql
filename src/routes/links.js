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

//Obtener un tatuaje por id
router.get('/tatuaje/:id', (req, res) => {
    database.query('SELECT * FROM tatuaje WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Eliminar un tatuaje por id
router.delete('/tatuaje/:id', (req, res) => {
    database.query('DELETE FROM tatuaje WHERE id = ?',[req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully.');
        else
            console.log(err);
    })
});

//Insert an employees
router.post('/nuevoTatuaje', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

//Insert an employees
router.post('/nuevo-tatuaje-2', (req, res) => {
    let tattoo = req.body;
    var sql = "SET @id = ?;SET @img = ?;SET @descripcion = ?;SET @tatuador = ?; SET @color = ?; \
    CALL EmployeeAddOrEdit(@id,@img,@descripcion,@tatuador,@color);";
    database.query(sql, [tattoo.id, tattoo.img, tattoo.descripcion, tattoo.tatuador, tattoo.color], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                    res.send('Inserted tattoo id : '+element[0].id);
            });
        else
            console.log(err);
    })
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