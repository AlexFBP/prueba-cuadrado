const express = require('express');

// Inicializaciones
const app = express();

// Ajustes
app.set('port', 5678);

// Iniciar el servidor
app.listen(app.get('port'),()=>{
  console.log('Backend en el puerto ', app.get('port'));
});
