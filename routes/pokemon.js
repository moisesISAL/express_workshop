const express = require('express');
const pokemon = express.Router();
//const { pk } = require('../pokedex.json'); //las llaves funcionan como un buscador y toman todo lo que coincida con el nombre
const db = require('../config/database');

pokemon.post("/", (req, res, next) => {
    return res.status(200).send(req.body.name);
})

pokemon.get("/", async (req, res, next) => { //"/: nos dice que ahora es un variable por lo tanto pdoemos asignarle mas uris pro ejemplo /:nombreX/edad "
    //console.log(req.params.name); //recordemos que req es una peticion del usuario
    const pkmn = await db.query("SELECT * FROM pokemon");
    return res.status(200).json(pkmn);
});


pokemon.get('/:id([0-9]{1,3})', (req, res, next) => {
    const id = req.params.id - 1;
    (id >= 0 && id <= 150) ? res.status(200).send(pk[req.params.id - 1]) : res.status(404).send('Pokemon no encontrado');

});

pokemon.get('/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;
    // for (i = 0; i < pokemon.length; i++) {
    //     if (pokemon[i].name.toUpperCase() == name.toUpperCase()) {

    //         return res.status(200).send(pokemon[i]);
    //     }
    //     return res.status(404).send('pokemon no encontrado')
    // }

    const pkmn = pk.filter((p) => { //pk es un arreglo que va almacenar lo que se adapte al filtro que establecimos
        // if (p.name.toUpperCase() == name.toUpperCase()) {
        //     return p;
        // }


        // operador ternario: condicion ? valor_si_true : valor_si_false
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;

    });

    console.log(pk);

    (pkmn.length > 0) ? res.status(200).send(pkmn) : res.status(404).send("Pokemon no encontrado");


});

 module.exports = pokemon; //la forma mas sencilla de exportar pero solo nos permite exportar una sola cosa