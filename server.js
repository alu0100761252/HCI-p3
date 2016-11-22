// importar
 var express = require('express');

// instanciar
var app = express();

 // ruteo
app.get('/', function(req, res){
 res.sendfile(__dirname + '/public/index.html');
 });
 
 app.use(express.static('public'));
 // escuchar
 app.listen(9000);

 console.log("Servidor Express escuchando en modo %s", app.settings.env);
