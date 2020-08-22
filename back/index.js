const express = require('express');
const morgan = require('morgan');

// Inicializaciones
const app = express();

// Ajustes
app.set('port', 5678);

// Middlewares
app.use(morgan('dev'));

// Iniciar el servidor
app.listen(app.get('port'),()=>{
  console.log('Backend en el puerto ', app.get('port'));
});
