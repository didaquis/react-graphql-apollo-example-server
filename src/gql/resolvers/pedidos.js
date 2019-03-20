const { Pedidos } = require('../../models/index');

module.exports = {
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
				nuevoPedido.save((error) => {
					if (error) {
						reject(error);
					} else {
						resolve(nuevoPedido);
					}
				});
			});
		}
	}
};
