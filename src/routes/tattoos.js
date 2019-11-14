const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.get('/', (req, res) => {
    res.send('Welcome to Tattoo page');
});

//Get all tattoos
router.get('/tattoos', (req, res) => {
    database.query('SELECT * FROM tattoo', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err)
            res.send(err);
        }

    });
});

//Get tattoo by id
router.get('/tattoo/:id', (req, res) => {
    database.query('SELECT * FROM tattoo WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo');
        }

    })
});

//Delete tattoo by id
router.delete('/tattoo/:id', (req, res) => {
    database.query('DELETE FROM tattoo WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully');
        else {
            console.log(err);
            res.send('Error deleting tattoo');
        }

    })
});

//Insert tattoo
router.post('/tattoo', (req, res) => {

    let tattoo = req.body;

    if (tattoo.img == undefined)
        tattoo.img = null;

    if (tattoo.description == undefined)
        tattoo.description = null

    if (tattoo.tattooArtist == undefined)
        tattoo.tattooArtist = null

    if (tattoo.color == undefined)
        tattoo.color = null;

    let query = `INSERT INTO tattoo (img, description, tattooArtist, color) VALUES(?,?,?,?)`;
    let values = [tattoo.img, tattoo.description, tattoo.tattooArtist, tattoo.color];

    database.query(query, values, (err, rows, fields) => {
        if (!err)
            res.send('Tattoo created successfully');
        else {
            console.log(err);
            res.send("Error creating tattoo");
        }
    });
});

//Update tattoo
router.put('/tattoo', (req, res) => {
    let tattoo = req.body;

    if (tattoo.img == undefined)
        tattoo.img = null;

    if (tattoo.description == undefined)
        tattoo.description = null

    if (tattoo.tattooArtist == undefined)
        tattoo.tattooArtist = null

    if (tattoo.color == undefined)
        tattoo.color = null;

    let query = `UPDATE tattoo set img=?, description=?, tattooArtist=?, color=? WHERE id=?`;
    let values = [tattoo.img, tattoo.description, tattoo.tattooArtist, tattoo.color, tattoo.id];

    database.query(query, values, (err, rows, fields) => {
        if (!err) {
            res.send('Tattoo updated successfully');
            // If we want to return the updated object
            // res.send(tattoo);
        }
        else {
            console.log(err)
            res.send("Error updating tattoo");
        }
    });
});

module.exports = router;