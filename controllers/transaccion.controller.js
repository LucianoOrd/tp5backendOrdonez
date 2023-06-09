const Transaccion = require('../models/transaccion');

const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transaccion = await Transaccion.find();
    res.json(transaccion);
}

transaccionCtrl.createTransaccion = async (req, res) => {

    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransaccionEmail = async (req, res) => {
    console.log(req.params.email);
    const transaccion = await Transaccion.find({emailCliente: req.params.email});
    res.json(transaccion);
}

transaccionCtrl.getTransaccionDivisa = async (req, res) => {
    const transaccion = await Transaccion.find({$or: [{monedaOrigen: req.params.moneda}, {monedaDestino: req.params.moneda}]}); 
    res.json(transaccion);
}

module.exports = transaccionCtrl;