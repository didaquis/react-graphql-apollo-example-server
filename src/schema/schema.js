const { buildSchema } = require('graphql');

const schema = buildSchema(`
	""" Cliente """
	type Cliente {
		id: ID
		nombre: String
		apellido: String
		empresa: String
		email: String
		tipo: TipoCliente
		pedidos: [Pedido]
	}

	""" Campos para los pedidos nuevos """
	type Pedido {
		producto: String
		precio: Int
	}

	""" Asigna la categoría del Cliente """
	enum TipoCliente {
		BASICO
		PREMIUM
	}

	""" Obten los datos de un cliente (especificando su id) """
	type Query {
		getCliente(id: ID): Cliente
	}

	""" Campos para los clientes nuevos """
	input ClienteInput {
		id: ID
		nombre: String!
		apellido: String!
		empresa: String!
		email: String!
		tipo: TipoCliente!
		pedidos: [PedidoInput]
	}

	input PedidoInput {
		producto: String
		precio: Int
	}

	""" Mutation para crear nuevos clientes """
	type Mutation {
		""" Te permite crear nuevos clientes """
		# Nombre del resolver (Input con datos): Valor que retorna
		crearCliente(input: ClienteInput): Cliente
	}
`);

module.exports = schema;