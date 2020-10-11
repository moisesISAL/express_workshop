const express = require('express');
const app = express();
//Express lee linea por linea por lo tanto improta el orden de como escribes tus gets, psot, etc.
const { pokemon } = require('./pokedex.json');

//app.listen(3000, function(){});
/*
Verbos Http
Get: Regresa un valor
Post: Publicar algun valor
Patch: Modifica algun elemento
Put: Modifica Todos los elementos
Delete: Borra algun valor */

app.get('/', (req, res, next) => {
    res.status(200);
    res.send("Bienvenido al pokedex");
});

app.get("/pokemon/all", (req, res, next) => { //"/: nos dice que ahora es un variable por lo tanto pdoemos asignarle mas uris pro ejemplo /:nombreX/edad "
    //console.log(req.params.name); //recordemos que req es una peticion del usuario
    res.status(200);
    res.send(pokemon);
});


app.get('/pokemon/:id([0-9]{1,3})',(req, res, next) => {
    const id = req.params.id -1;
    if(id >= 0 && id <= 150){
        res.status(200);
        res.send(pokemon[req.params.id-1]);
    } else{
        res.status(404);
        res.send('Pokemon no encontrado');
    }
    
});

app.get('/pokemon/:name', (req, res, next) =>{
    const name = req.params.name;
    for (i=0; i< pokemon.length; i++){
        if(pokemon[i].name == name){
            res.status(200);
            return res.send(pokemon[i]);
        }
        res.status(404);
    res.send('pokemon no encontrado')
    }
    
});


// app.listen(3000, () => {
//     console.log('server is running');

// })
// Esto es para desarrollo

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running');

})
//Esto es para produccion
