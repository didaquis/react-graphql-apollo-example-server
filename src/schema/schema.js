const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Cliente {
		id: ID
		nombre: String
		apellido: String
		empresa: String
		email: String
		tipo: TipoCliente
	}

	enum TipoCliente {
		BASICO
		PREMIUM
	}

	type Query {
		getCliente(id: ID): Cliente
	}

	input ClienteInput {
		id: ID
		nombre: String!
		apellido: String!
		empresa: String!
		email: String!
		tipo: TipoCliente!
	}

	type Mutation {
		crearCliente(input: ClienteInput): Cliente
	}
`);

module.exports = schema;