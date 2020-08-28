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

const Partido = require('../models/partido');
const Equipo = require('../models/equipo');

const intentaCrearPartidos = async () => {
    // TODO:
    // 1. Eliminar todos los partidos
    await Partido.deleteMany({});
    // 2. Combinar los equipos actuales
    const equipos = await Equipo.find();
    console.log("Equipos:");
    console.log(equipos);
    const combs = equipos.flatMap((v,i) => equipos.slice(i+1).map(w => ({v,w}))).map(comb => ({id1:comb.v._id, id2:comb.w._id}));
    console.log("Combinaciones:");
    console.log(combs);
    // 3. Con las combinaciones, generar los partidos.
}
const puntajesFinales = () => {}

router.post('/', async (req,res) => {
    const { modo } = req.body;
    const modoPrevio = await leeModo();
    if (modoValues.includes(`${modo}`)) {
        console.log(`Actual: ${modo} - Previo: ${modoPrevio.res}`);
        if (modo !== modoPrevio.res) {
            console.log('estado con cambios');
            if (modo === "jugando") {
                console.log('Modo juego. Creando partidos')
                // TODO: Validar, combinar y crear partidos
                intentaCrearPartidos();
            } else {
                console.log('Modo registro. Se permite regsitrar equipos')
                puntajesFinales();
            }
            // await Estado.findOneAndUpdate({name:'modo'},{value:`${modo}`});
            res.send(req.body.modo);
        } else {
            console.log('estado sin cambios');
            res.status(304).end();
        }
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
