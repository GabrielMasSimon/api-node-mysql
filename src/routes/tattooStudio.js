const express = require('express');
const router = express.Router();
const database = require('../database/database');

//Get all tattooStudios
router.get('/tattooStudios', (req, res) => {

    database.query('SELECT * FROM tattooStudio', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else{
            console.log(err);
            res.send(err);
        }
    });

});

//Get tattooStudio by id
router.get('/tattooStudio/:id', (req, res) => {

    database.query('SELECT * FROM tattooStudio WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo studio artists');
        }
    });

});

//Delete tattooStudio by id
router.delete('/tattooStudio/:id', (req, res) => {

    database.query('DELETE FROM tattooStudio WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully');
        else {
            console.log(err);
            res.send('Error deleting tattoo studio');
        }
    });

});


//Insert tattooStudio
router.post('/tattooStudio', (req, res) => {

    let tattooStudio = req.body;
    let query = `INSERT INTO tattooStudio (name, address) VALUES(?,?)`;
    let values = [tattooStudio.name, tattooStudio.address];

    database.query(query, values, (err, rows, fields) => {
        if (!err)
            res.send('Tattoo studio created successfully');
        else {
            console.log(err);
            res.send("Error creating tattoo studio");
        }
    });

});

//Update tattooStudio
router.put('/tattooStudio', (req, res) => {

    let tattooStudio = req.body;
    let query = `UPDATE tattooStudio set name=?, address=? WHERE id=?`;
    let values = [tattooStudio.name, tattooStudio.address, tattooStudio.id];

    database.query(query, values, (err, rows, fields) => {
        if (!err) {
            res.send('Tattoo studio updated successfully');
            // If we want to return the updated object
            // res.send(tattooStudio);
        }
        else {
            console.log(err)
            res.send("Error updating tattoo studio");
        }
    });

});

module.exports = router;