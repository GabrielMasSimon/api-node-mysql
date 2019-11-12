const express = require('express');
const app = express();
// TODO mirar si el require es correcto o se tiene que hacer de otra forma
require('./database');

app.use(require('./routes/links'));

app.listen(3000, () => {
    console.log('server listen on port 3000');
});












