const express = require('express');
const router = express.Router();
const database = require('../database/database');

router.get('/', (req, res) => {
    res.send('Welcome to Tattoo page');
});


//Get all tattooArtists
router.get('/tattooArtists', (req, res) => {
    database.query('SELECT * FROM tattooArtist', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            res.send(err);
            console.log(err)
        }
    });
});

//Get tattooArtists by id
router.get('/tattooArtist/:id', (req, res) => {
    database.query('SELECT * FROM tattooArtist WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattooArtist artists');
        }
    })
});

//Delete tattooArtist by id
router.delete('/tattooArtist/:id', (req, res) => {
    database.query('DELETE FROM tattooArtist WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully');
        else {
            console.log(err);
            res.send('Error deleting tattooArtist');
        }
    })
});

//Insert tattooArtist
router.post('/tattooArtist', (req, res) => {

    let tattooArtist = req.body;
    let query = `INSERT INTO tattooArtist (name, experience, tattooStudio) VALUES(?,?,?)`;
    let values = [tattooArtist.name, tattooArtist.experience, tattooArtist.tattooStudio];

    database.query(query, values, (err, rows, fields) => {
        if (!err)
            res.send('TattooArtist created successfully');
        else {
            console.log(err);
            res.send("Error creating tattooArtist");
        }
    });
});

//Update tattooArtist
router.put('/tattooArtist', (req, res) => {

    let tattooArtist = req.body;
    let query = `UPDATE tattooArtist set name=?, experience=?, tattooStudio=? WHERE id=?`;
    let values = [tattooArtist.name, tattooArtist.experience, tattooArtist.tattooStudio, tattooArtist.id];

    database.query(query, values, (err, rows, fields) => {
        if (!err) {
            res.send('Tattoo Artist updated successfully');
            // If we want to return the updated object
            // res.send(tattooArtist);
        }
        else {
            console.log(err)
            res.send("Error updating tattooArtist");
        }
    });
});

module.exports = router;