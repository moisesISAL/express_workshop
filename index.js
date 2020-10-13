const bodyParser = require('body-parser')
const express = require('express');
const app = express();
//Express lee linea por linea por lo tanto improta el orden de como escribes tus gets, psot, etc.
const { pokemon } = require('./pokedex.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use sirve para a;adir middlewares los cuales tratan la infromacion de nuestro codigo

//app.listen(3000, function(){});
/*
Verbos Http
Get: Regresa un valor
Post: Publicar algun valor
Patch: Modifica algun elemento
Put: Modifica Todos los elementos
Delete: Borra algun valor */

app.get('/', (req, res, next) => {

    res.status(200).send("Bienvenido al pokedex");
});

app.post("/pokemon", (req, res, next) =>{
 return res.status(200).send(req.body.name);
})

app.get("/pokemon", (req, res, next) => { //"/: nos dice que ahora es un variable por lo tanto pdoemos asignarle mas uris pro ejemplo /:nombreX/edad "
    //console.log(req.params.name); //recordemos que req es una peticion del usuario

    res.status(200).send(pokemon);
});


app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id - 1;
    (id >= 0 && id <= 150) ? res.status(200).send(pokemon[req.params.id - 1]) : res.status(404).send('Pokemon no encontrado');

});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;
    // for (i = 0; i < pokemon.length; i++) {
    //     if (pokemon[i].name.toUpperCase() == name.toUpperCase()) {

    //         return res.status(200).send(pokemon[i]);
    //     }
    //     return res.status(404).send('pokemon no encontrado')
    // }

    const pk = pokemon.filter((p) => { //pk es un arreglo que va almacenar lo que se adapte al filtro que establecimos
        // if (p.name.toUpperCase() == name.toUpperCase()) {
        //     return p;
        // }


        // operador ternario: condicion ? valor_si_true : valor_si_false
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;

    });

    console.log(pk);

    (pk.length > 0) ? res.status(200).send(pk) : res.status(404).send("Pokemon no encontrado");


});


// app.listen(3000, () => {
//     console.log('server is running');

// })
// Esto es para desarrollo

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running');

})
//Esto es para produccion
