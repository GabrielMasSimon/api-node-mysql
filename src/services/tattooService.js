const TattooService = {};
const database = require('../database/database');

function home(req, res) {
    res.send('Welcome to Tattoo pagse');
}

function getAll(req, res) {
    database.query('SELECT * FROM tattoo', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log('Error to find tattoos');
            res.send(err);
        }
    });
}

function getById(req, res) {
    database.query('SELECT * FROM tattoo WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo');
        }
    });
}

function deleteById(req, res) {
    database.query('DELETE FROM tattoo WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted succesfully');
        else {
            console.log(err);
            res.send('Error deleting tattoo');
        }
    });
}

function insert(req, res) {
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
}

function update(req, res) {
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
}

function getByTattooArtist(req, res) {
    database.query('SELECT * FROM tattoo WHERE tattooArtist =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo by artist');
        }
    });
}

function getByTattooStudio(req, res) {
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

        });
}

function getByColor(req, res) {
    let boolean;
    if (req.params.color === 'true')
        boolean = true;
    if (req.params.color === 'false')
        boolean = false;

    database.query('SELECT * FROM tattoo WHERE color = ?', boolean, (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else {
            console.log(err);
            res.send('Error to find a tattoo by color');
        }

    });
}

TattooService.home = home;
TattooService.getAll = getAll;
TattooService.getById = getById;
TattooService.deleteById = deleteById;
TattooService.insert = insert;
TattooService.update = update;
TattooService.getByTattooArtist = getByTattooArtist;
TattooService.getByTattooStudio = getByTattooStudio
TattooService.getByColor = getByColor;


module.exports = TattooService;