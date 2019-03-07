const { Productos } = require('../../models/index');

module.exports = {
	Query: {
		obtenerProductos: (root, { limite, offset }) => {
			return Productos.find({}).limit(limite).skip(offset);
		}
	},
	Mutation: {
		nuevoProducto: (root, { input }) => {
			const nuevoProducto = new Productos({
				nombre: input.nombre,
				precio: input.precio,
				stock: input.stock
			});

			nuevoProducto.id = nuevoProducto._id;

			return new Promise((resolve, reject) => {
				nuevoProducto.save((error) => {
					if (error) {
						reject(error);
					} else {
						resolve(nuevoProducto);
					}
				});
			});
		}
	}
};
