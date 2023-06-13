const mongoose = require('mongoose');
const { Schema } = mongoose;
const Espectador = require('./espectador')

const TicketSchema = new Schema({
    precioTicket: { type: Number, required: true },
    categoriaEspectador: { type: String, required: true },
    fechaCompra: { type:Date, required: true },
    espectador: { type: Schema.Types.ObjectId, ref: Espectador }
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema)