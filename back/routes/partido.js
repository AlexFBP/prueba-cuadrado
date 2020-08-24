const { Router } = require("express");
const router = Router();

const Partido = require("../models/partido");

router.get('/', async (req,res) => {
  const partidos = await Partido.find();
  res.json(partidos);
});

router.get("/:id", async (req, res) => {
  const partido = await Partido.findById(req.params.id);
  res.json(partido);
});

router.post("/", async (req, res) => {
  const { id1, id2 } = req.body;
  const newPartido = new Partido({ id1, id2 });
  await newPartido.save();
  res.json({ msg: "Partido Creado" });
});

router.post("/:id", async (req, res) => {
  const {p1, p2} = req.body;
  let upd;
  if (p1 !== null && p2 === null) {
    upd = {p1}
  } else if (p1 === null && p2 !== null) {
    upd = {p2}
  } else if (p1 !== null && p2 !== null) {
    upd = {p1, p2}
  }

  if (upd !== null) {
    const partido = await Partido.findByIdAndUpdate(req.params.id,upd)
    await partido.save();
    res.json({msg: 'Partido Actualizado'});
  }
  res.end();
});

router.delete("/:id", async (req, res) => {
  const partido = await Partido.findByIdAndDelete(req.params.id);
  console.log(partido);
  res.json({msg: "Partido Eliminado"});
});

module.exports = router;
