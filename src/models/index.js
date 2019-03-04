const mongoose = require('mongoose');

const { ClienteSchema, ProductoSchema } = require('./schemas');

module.exports = {
	Clientes: mongoose.model('clientes', ClienteSchema),
	Productos: mongoose.model('productos', ProductoSchema)
};