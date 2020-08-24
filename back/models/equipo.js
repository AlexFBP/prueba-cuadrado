const { Schema, model } = require('mongoose');

const esquemaEquipo = new Schema({
  name: {type: String, required: true},
  score: {type: Number, default: 0},
  dt_create: {type: Date, default: Date.now}
})

module.exports = model ('Equipo', esquemaEquipo);
