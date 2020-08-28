const { Router } = require("express");
const router = Router();

const Estado = require('../models/estado');
const { exists } = require("../models/estado");

const modoValues = ["registro", "jugando"];

function leeModo () {
    return new Promise(async (res) => {
        await Estado.findOne({name:"modo"}, (err, doc) => {
            if (err) {
                console.log('Estado-error');
                res({status: 500,err});
            } else {
                if (!doc) {
                    const newEstado = new Estado({name: 'modo', value: 'registro'});
                    newEstado.save();
                    console.log('Estado-inicial');
                    res({res:'registro'});
                } else {
                    console.log('Estado-leido');
                    res({res:doc.value});
                }
            }
        });
    })
}

router.get('/', async (req,res) => {
    const objeto = await leeModo();
    if (objeto.status) {
        res.status(objeto.status).json(objeto);
    } else {
        res.json(objeto);
    }
});

const creaPartidos = () => {}
const puntajesFinales = () => {}

router.post('/', async (req,res) => {
    const { modo } = req.body;
    const modoPrevio = await leeModo();
    if (modoValues.includes(`${modo}`)) {
        await Estado.findOneAndUpdate({name:'modo'},{value:`${modo}`});
        res.send(req.body.modo);
    } else res.status(400).end();
})

router.delete('/', async (req,res) => {
    if (req.body.hasOwnProperty('modo')) {
        const obj = await Estado.findOneAndDelete({name:'modo'});
        console.log(obj);
        res.json(obj);
    } else res.status(400).end();
});

module.exports = router;
