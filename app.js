'use strict';

const express = require('express');
var randomstring = require("randomstring");

const PORT = 3000;
const HOST = '0.0.0.0';

var tekst = randomstring.generate();

const app = express();
app.get('/', (req, res) => {
 res.send(' Random string: ' + tekst);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
