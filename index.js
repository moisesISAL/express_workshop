const express = require('express');
const app = express();

//app.listen(3000, function(){});
/*
Verbos Http
Get: Regresa un valor
Post: Publicar algun valor
Patch: Modifica algun elemento
Put: Modifica Todos los elementos
Delete: Borra algun valor */

app.get('/', (req,res,next)=>{
    res.status(200);
    res.send('Hola mundo desde express');
});

app.listen(3000,()=>{
    console.log('server is running');

})
let y = 0;
var z = 0;