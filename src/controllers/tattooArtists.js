const express = require('express');
const router = express.Router();
const database = require('../database/database');


//Get all tattooArtists
router.get('/tattooArtists', (req, res) => {

    database.query('SELECT * FROM tattooArtist', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log('Error to find tattoo artists');
            res.send(err);
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
            res.send('Error to find a tattoo artists');
        }
    });

});

//Delete tattooArtist by id
router.delete('/tattooArtist/:id', (req, res) => {

    database.query('DELETE FROM tattooArtist WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully');
        else {
            console.log(err);
            res.send('Error deleting tattoo artist');
        }
    });

});

//Insert tattooArtist
router.post('/tattooArtist', (req, res) => {

    let tattooArtist = req.body;
    let query = `INSERT INTO tattooArtist (name, experience, tattooStudio) VALUES(?,?,?)`;
    let values = [tattooArtist.name, tattooArtist.experience, tattooArtist.tattooStudio];

    database.query(query, values, (err, rows, fields) => {
        if (!err)
            res.send('Tattoo artist created successfully');
        else {
            console.log(err);
            res.send("Error creating tattoo artist");
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
            res.send('Tattoo artist updated successfully');
            // If we want to return the updated object
            // res.send(tattooArtist);
        }
        else {
            console.log(err)
            res.send("Error updating tattoo artist");
        }
    });

});

module.exports = router;