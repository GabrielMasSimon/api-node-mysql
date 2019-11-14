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
            console.log('Error to find tattoos');
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

//Get tattoo by tattoArtistId
router.get('/tattooByArtist/:id', (req, res) => {
    database.query('SELECT * FROM tattoo WHERE tattooArtist =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo by artist');
        }

    })
});

//Get tattoo by tattooStudio
router.get('/tattooByStudio/:id', (req, res) => {
    database.query(
        'SELECT t.* FROM tattoo.tattooStudio ts' +
        ' inner join tattooArtist ta' +
        ' on ta.tattooStudio = ts.id' +
        ' inner join tattoo t' +
        ' on t.tattooArtist = ta.id' +
        ' where ts.id=?'
        , [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo by studio');
        }

    })
});


//Get tattoo by tattoArtistId
router.get('/tattooByColor/:color', (req, res) => {

    let boolean;
    if (req.params.color === 'true')
        boolean = true;
    if (req.params.color === 'false')
        boolean = false;

    database.query('SELECT * FROM tattoo WHERE color = ?', boolean, (err, rows, fields) => {
        console.log();
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo by color');
        }

    })
});


module.exports = router;