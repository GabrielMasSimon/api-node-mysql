const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// TODO mirar si el require es correcto o se tiene que hacer de otra forma
const database = require('./database/database');
const colors = require('colors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Settings
app.set('appName', "api-node-mysql");
app.set('port', 3000)

//Routes
app.use(require('./controllers/tattoos'));
app.use(require('./controllers/tattooArtists'));
app.use(require('./controllers/tattooStudio'));


app.listen(app.get('port'), () => {
    console.log('App name: ',app.get('appName').yellow);
    console.log('Server listen on port '+ app.get('port'));
});












