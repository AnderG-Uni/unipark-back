const express = require('express');
const cors = require('cors');
const pool = require('./database/connect_mongodb.js');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Permitir todos los orígenes
app.use(cors());
app.use(express.json());

//Ruta raiz
app.get('/', async (req, res) => {
  res.send("Bienvenido a la API del proytecto UniPark");
});


//configuración de rutas
const userRoutes = require('./routes/routers.js');
app.use('/api-rest/v1', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
