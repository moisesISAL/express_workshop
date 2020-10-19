// const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();
//Express lee linea por linea por lo tanto improta el orden de como escribes tus gets, psot, etc.
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
//app.use sirve para a;adir insturcciones y en este caso middlewares los cuales tratan la informacion de nuestro codigo, es decir nuestras peticiones pasan por estos middlewares



//app.listen(3000, function(){});
/*
Verbos Http
Get: Regresa un valor
Post: Publicar algun valor
Patch: Modifica algun elemento
Put: Modifica Todos los elementos
Delete: Borra algun valor */

app.get('/', (req, res, next) => {

    res.status(200).json({code: 1, message: "bienvenido al pokedex"});
});

app.use("/pokemon", pokemon);


// app.listen(3000, () => {
//     console.log('server is running');

app.use((req, res, next)=>{
    return res.status(404).json({code:404, message: 'url no encontrada'});
});


// })
// Esto es para desarrollo

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running');

})
//Esto es para produccion

//npm remove body-parser--save remover modulos
