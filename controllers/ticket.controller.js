const Ticket = require('../models/ticket')

const ticketCtrl = {};

ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ticketCtrl.getTickets = async (req, res) => {
    var ticket = await Ticket.find().populate("espectador");
    res.json(ticket);
}

ticketCtrl.getTicketsEspectador = async (req, res) => {
    var ticket = await Ticket.find({categoriaEspectador: req.body.categoria});
    res.json(ticket);
}

ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket updated'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket removed'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = ticketCtrl;