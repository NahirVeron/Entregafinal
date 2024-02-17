const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();
const path = require('path');

// Configura cors para permitir solicitudes desde cualquier origen (*)
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
};

app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
