const { Schema, model } = require('mongoose');

new esquemaEquipo({
  name: {type: String, required: true},
  dt_create: {type: Date, default: Date.now}
})

module.exports = model ('Equipo', esquemaEquipo);
