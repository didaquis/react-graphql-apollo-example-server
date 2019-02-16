
const {clientesDB} = require('../database');
const {Cliente} = require('../classes/Cliente');

module.exports = {
	cliente: () => {
		return {
			'id': '666',
			'nombre': 'John',
			'apellido': 'Doe',
			'empresa': 'ACME',
			'email': 'john.doe@acme.com'
		};
	}, 
	crearCliente: ({ input }) => {
		const numberOfBytes = 10;
		const id = require('crypto').randomBytes(numberOfBytes).toString('hex');
		clientesDB[id] = input;
		return new Cliente(id, input);
	}
};