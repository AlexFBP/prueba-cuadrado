const { Router } = require("express");
const router = Router();

const Estado = require('../models/estado');

router.get('/:state', async (req,res) => {
    const estado = await Estado.findOne({name:req.params.state}, (err,obj) => {
        if (err)
            res.end();
        else
        res.json(obj);
    })
});

router.post('/:state', async (req,res) => {
    const { value } = req.body;
    const estado = await Estado.findOneAndUpdate({name:req.params.state},{value});
    await estado.save();
    res.json({msg: 'Estado Actualizado'});
})

router.post('/', async (req,res) => {
    const {name,value} = req.body;
    const newEstado = new Estado({name,value});
    await newEstado.save();
    res.json({msg: "Estado creado"});
});

router.delete('/:state', async (req,res) => {
    const estado = await Estado.findOneAndDelete({name:req.params.state}, (err,obj) => {
        if (err)
            res.end();
        else
        res.json({msg: "Estado Eliminado"});
    });
})

module.exports = router;
