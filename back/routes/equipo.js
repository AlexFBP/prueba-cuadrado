const { Router } = require('express');
const router = Router();

const Equipo = require('../models/equipo')

router.get('/',async (req,res) => {
  const equipos = await Equipo.find();
  res.json(equipos);
});

router.get('/:id', async (req,res) => {
  const equipo = await Equipo.findById(req.params.id);
  res.json(equipo);
})

router.post('/', async (req,res) => {
  const { name } = req.body;
  const newEquipo = new Equipo({name});
  await newEquipo.save();
  res.json({msg: 'Equipo guardado'});
});

router.delete('/:id', async (req,res) => {
  const book = await Equipo.findByIdAndDelete(req.params.id);
  console.log(book);
  res.json({msg: "Equipo Eliminado"});
});

module.exports = router;
