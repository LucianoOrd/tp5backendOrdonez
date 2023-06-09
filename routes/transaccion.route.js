//defino controlador para el manejo de CRUD
const transaccionCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/cliente/:email', transaccionCtrl.getTransaccionEmail);
router.get('/divisas/:moneda', transaccionCtrl.getTransaccionDivisa);
//exportamos el modulo de rutas
module.exports = router;