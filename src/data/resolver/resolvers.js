
const { clientesDB } = require('../../database');
const { Cliente } = require('../../classes/Cliente');

const mongoose = require('mongoose');
const clientes = require('../db');

module.exports = {
	Query: {
		getCliente: (root, { id }) => {
			return new Cliente(id, clientesDB[id]);
		}
	},
	Mutation: {
		crearCliente: (root, { input }) => {
			const numberOfBytes = 10;
			const id = require('crypto').randomBytes(numberOfBytes).toString('hex');
			clientesDB[id] = input;
			return new Cliente(id, input);
		}
	}
};
