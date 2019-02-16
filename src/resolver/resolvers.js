
const {clientesDB} = require('../database');
const {Cliente} = require('../classes/Cliente');

module.exports = {
	getCliente: ({id}) => {
		return new Cliente(id, clientesDB[id]);
	},
	crearCliente: ({ input }) => {
		const numberOfBytes = 10;
		const id = require('crypto').randomBytes(numberOfBytes).toString('hex');
		clientesDB[id] = input;
		return new Cliente(id, input);
	}
};