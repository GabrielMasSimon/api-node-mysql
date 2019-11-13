const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// TODO mirar si el require es correcto o se tiene que hacer de otra forma
const database = require('./database');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(require('./routes/links'));

app.listen(3000, () => {
    console.log('server listen on port 3000');
});












