const { Schema, model } = require('mongoose');

const esquemaPartido = new Schema({
    id1: {type: Schema.Types.ObjectId , required: true},
    id2: {type: Schema.Types.ObjectId, required: true},
    p1: {type: Number, default: 0},
    p2: {type: Number, default: 0},
});

module.exports = model ('Partido', esquemaPartido);
