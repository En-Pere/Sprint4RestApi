// - Exercici 1
// Crea un servidor amb Express que retorni a una petició GET a l'endpoint /user un json amb el teu nom, edat i la url des d'on es fa la petició.

const express = require('express');
const app = express();
const multer  = require('multer');


app.get('/user',function(req,res){
	res.json({
		nom: 'pere',
		edat: '37',
		urlpeticio: 'http://localhost:8000/user'
	})
})

// - Exercici 2
// Afegeix un endpoint /upload per a pujar al servidor un arxiu de tipus png, jpg o gif que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.




app.listen(8000, function(){console.log('server funcionando')});