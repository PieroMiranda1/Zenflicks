const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Manejo de rutas SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
