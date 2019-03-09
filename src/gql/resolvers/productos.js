const { Productos } = require('../../models/index');

module.exports = {
	Query: {
		obtenerProductos: (root, { limite, offset }) => {
			return Productos.find({}).limit(limite).skip(offset);
		},
		obtenerProducto: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Productos.findById(id, (error, producto) => {
					if (error) {
						reject(error);
					} else {
						resolve(producto);
					}
				});
			});
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
		},
		actualizarProducto: (root, { input }) => {
			return new Promise((resolve, reject) => {
				Productos.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, producto) => {
					if (error) {
						reject(error);
					} else {
						resolve(producto);
					}
				});
			});
		} 
	}
};