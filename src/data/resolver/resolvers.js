
const Clientes = require('../db');

module.exports = {
	Query: {
		getClientes: () => {
			return new Promise((resolve, reject) => {
				Clientes.find({}, (error, clientes) => {
					if (error) {
						reject(error);
					} else {
						resolve(clientes);
					}
				});
			});
		}
	},
	Mutation: {
		crearCliente: (root, { input }) => {
			const nuevoCliente = new Clientes({
				nombre: input.nombre,
				apellido: input.apellido,
				empresa: input.empresa,
				email: input.email,
				tipo: input.tipo,
				pedidos: input.pedidos
			});

			nuevoCliente.id = nuevoCliente._id;

			return new Promise((resolve, reject) => {
				nuevoCliente.save((error) => {
					if (error) {
						reject(error);
					} else {
						resolve(nuevoCliente);
					}
				});
			});
		},
		actualizarCliente: (root, { input }) => {
			return new Promise((resolve, reject) => {
				Clientes.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, cliente) => {
					if (error) {
						reject(error);
					} else {
						resolve(cliente);
					}
				});
			});
		},
		eliminarCliente: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Clientes.findOneAndDelete({ _id: id }, (error) => {
					if (error) {
						reject(error);
					} else {
						resolve('Se ha eliminado el cliente');
					}
				});
			});
		}
	}
};
