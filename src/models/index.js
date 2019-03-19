const mongoose = require('mongoose');

const { ClienteSchema, ProductoSchema, PedidosSchema } = require('./schemas');

module.exports = {
	Clientes: mongoose.model('clientes', ClienteSchema),
	Productos: mongoose.model('productos', ProductoSchema),
	Pedidos: mongoose.model('pedidos', PedidosSchema)
};