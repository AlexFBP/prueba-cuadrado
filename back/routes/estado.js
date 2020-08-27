const { Router } = require("express");
const router = Router();

const Estado = require('../models/estado');

const modoValues = ["registro", "jugando"];

router.get('/', async (req,res) => {
    Estado.findOne({name:"modo"}, (err, doc) => {
        if (err) {
            // El error aqui puede ser pero de conexion con la base de datos
            console.log('error')
            console.log(err);
            res.status(500).send(err);
        } else {
            if (!doc) {
                const newEstado = new Estado({name: 'modo', value: 'registro'});
                newEstado.save();
                console.log('Estado inicializado');
                console.log(newEstado);
                res.send('registro');
            } else {
                console.log('Estado leido');
                res.send(doc.value);
            }
        }
    });
});

router.post('/', async (req,res) => {
    const { value } = req.body;
    if (modoValues.includes(`${value}`)) {
        await Estado.findOneAndUpdate({name:'modo'},{value});
        res.send(req.body.value);
    } else res.status(400).end();
})

module.exports = router;
