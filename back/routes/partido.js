const { Router } = require("express");
const router = Router();

const Partido = require("../models/partido");

router.get("/:id", async (req, res) => {
  const estado = await Estado.findById(req.params.id);
  res.json(estado);
});

router.post("/", async (req, res) => {
  const { id1, id2 } = req.body;
  const newPartido = new Partido({ id1, id2 });
  await newPartido.save();
  res.json({ msg: "Partido Creado" });
});

router.post("/:id", async (req, res) => {
  const {p1, p2} = req.body;
  const partido = await Partido.findByIdAndUpdate(req.params.id,{p1,p2})
  await partido.save();
  res.json({msg: 'Partido Actualizado'});
});

router.delete("/:id", async (req, res) => {
  const partido = await Partido.findByIdAndDelete(req.params.id);
  console.log(partido);
  res.json({msg: "Partido Eliminado"});
});

module.exports = router;
