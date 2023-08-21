const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Importar y montar las rutas
const usuariosRoutes = require('./routes/usuarios');
const habilidadesRoutes = require('./routes/habilidades');
const serviciosRoutes = require('./routes/servicios');
const contratosRoutes = require('./routes/contratos');
const empresasRoutes = require('./routes/empresas');

app.use('/api', usuariosRoutes);
app.use('/api', habilidadesRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', contratosRoutes);
app.use('/api', empresasRoutes);

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Tinder para Habilidades!');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
