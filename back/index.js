if (process.env.NODE_ENV === 'devel')
  require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Inicializaciones
const app = express();
require('./db')

// Ajustes
app.set('port', process.env.PORT_BACK || 5678);

// Middlewares
app.use(morgan('dev'));

// Enrutamientos
app.use('/api/teams',require('./routes/equipo'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(app.get('port'),()=>{
  console.log('Backend en el puerto ', app.get('port'));
});
