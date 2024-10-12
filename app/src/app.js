const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Conexión a MongoDB usando la URI del archivo .env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error conectando a MongoDB:', err));

// Middleware
app.use(express.json());
app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
