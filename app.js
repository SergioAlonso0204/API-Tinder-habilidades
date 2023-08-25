const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('./db/knexfile');

app.use(express.json());

// Importar y montar las rutas
const usuariosRoutes = require('./routes/usuarios');
const habilidadesRoutes = require('./routes/habilidades');
const serviciosRoutes = require('./routes/servicios');
const contratosRoutes = require('./routes/contratos');
const empresasRoutes = require('./routes/empresas');

// Corrección: Usa las rutas sin el prefijo '/routes'
app.use('/usuarios', usuariosRoutes);
app.use('/habilidades', habilidadesRoutes);
app.use('/servicios', serviciosRoutes);
app.use('/contratos', contratosRoutes);
app.use('/empresas', empresasRoutes);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Tinder para Habilidades!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
