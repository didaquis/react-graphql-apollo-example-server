class Cliente {
	constructor (id, { nombre, apellido, empresa, email }) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.empresa = empresa;
		this.email = email;
	}
}

module.exports = { Cliente };
