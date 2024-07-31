// Montar servidor en puerto 3000
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('He recibido una peticion get, alguien solicita datos.');
} )

app.post('/', (req, res) => {
    res.send('He recibido una peticion post, vienen datos para procesar.');
} )

app.put('/actualizar', (req, res) => {
    res.send('Actualizando info.');
} )

app.delete('/', (req, res) => {
    res.send('He recibido una peticion delete, elimine informacion.');
} )

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
});