const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Cliente {
		id: ID
		nombre: String
		apellido: String
		empresa: String
		email: String
	}

	type Query {
		cliente: Cliente
	}
`);

module.exports = schema;