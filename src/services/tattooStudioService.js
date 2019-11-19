const TattooStudioService = {};
const database = require('../database/database');

function getAll(req, res) {
    database.query('SELECT * FROM tattooStudio', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send(err);
        }
    });
}

function getById(req, res) {
    database.query('SELECT * FROM tattooStudio WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo studio artists');
        }
    });
}

function deleteById(req, res) {
    database.query('DELETE FROM tattooStudio WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully');
        else {
            console.log(err);
            res.send('Error deleting tattoo studio');
        }
    });
}

function insert(req, res) {
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
}

function update(req, res) {
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
}

TattooStudioService.getAll = getAll;
TattooStudioService.getById = getById;
TattooStudioService.deleteById = deleteById;
TattooStudioService.insert = insert;
TattooStudioService.update = update;

module.exports = TattooStudioService;