const { Usuarios } = require('../../data/models/index');

module.exports = {
	Query: {
		
	},
	Mutation: {
		crearUsuario: async (root, { usuario, password }) => {

			const existeUsuario = await Usuarios.findOne({usuario});

			if (existeUsuario) {
				throw new Error('Ese nombre de usuario no está disponible');
			}

			await new Usuarios({
				usuario,
				password
			}).save();

			return 'El usuario se ha creado correctamente';
		}
	}
};
