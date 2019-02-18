const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
	nombre: { 
		type: String,
		required: true
	},
	apellido: String,
	empresa: String,
	email: String,
	tipo: String,
	pedidos: Array
});
