// - Exercici 1
// Crea un servidor amb Express que retorni a una petició GET a l'endpoint /user un json amb el teu nom, edat i la url des d'on es fa la petició.

const express = require('express');
const app = express();
const {upload, reqUser} = require('./app');

//hacemos la petición get al servidor para que muestre nom, edat y urlpetició
app.get('/user',reqUser)

// - Exercici 2
// Afegeix un endpoint /upload per a pujar al servidor un arxiu de tipus png, jpg o gif que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.

//hacemos petición post en la ruta /upload 
app.post('/upload', upload, function(req, res) {
  res.json(req.file);
});

app.listen(8000, function(){console.log('server funcionando')});