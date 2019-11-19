const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// TODO mirar si el require es correcto o se tiene que hacer de otra forma
const database = require('./database/database');
const colors = require('colors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('./routes/tattoos'));
app.use(require('./routes/tattooArtists'));
app.use(require('./routes/tattooStudio'));


app.listen(3000, () => {
    console.log(' \n Server listen on port 3000 \n'.green);
});












