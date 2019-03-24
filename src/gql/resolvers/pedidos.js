const { Pedidos, Productos } = require('../../models/index');

module.exports = {
	Query: {
		obtenerPedidos: (root, { clienteId }) => {
			return new Promise((resolve, reject) => {
				Pedidos.find({ cliente: clienteId }, (error, pedidos) => {
					if (error) {
						reject(error);
					} else {
						resolve(pedidos);
					}
				});
			});
		}
	},
	Mutation: {
		nuevoPedido: (root, { input }) => {
			const nuevoPedido = new Pedidos({
				pedido: input.pedido,
				total: input.total,
				fecha: new Date(),
				cliente: input.cliente, 
				estado: 'PENDIENTE'
			});

			nuevoPedido.id = nuevoPedido._id;

			return new Promise((resolve, reject) => {

				// Restamos el stock (observa el signo negativo delante de la cantidad)
				input.pedido.forEach(pedido => {
					Productos.updateOne({ _id: pedido.id },
						{ '$inc':
							{ 'stock': -pedido.cantidad }
						}, function (error) {
							if (error) return new Error(error);
						} );
				});

				nuevoPedido.save((error) => {
					if (error) {
						reject(error);
					} else {
						resolve(nuevoPedido);
					}
				});
			});
		},
		actualizarEstado: (root, { input } ) => {
			return new Promise((resolve, reject) => {
				Pedidos.findOneAndUpdate({ _id: input.id }, input, {new: true}, (error) => {
					if (error) {
						reject(error);
					} else {
						resolve('Se actualizó correctamente');
					}
				});
			});
		}
	}
};
