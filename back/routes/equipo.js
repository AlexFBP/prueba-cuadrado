const { Router } = require('express');
const router = Router();

router.get('/',(req,res) => res.json({text: "prueba ruta"}))

module.exports = router;
