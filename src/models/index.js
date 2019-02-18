const mongoose = require('mongoose');

const { ClienteSchema } = require('./schemas');

module.exports = {
	Clientes: mongoose.model('clientes', ClienteSchema)
};