class Cliente {
	constructor (id, { nombre, apellido, empresa, email, tipo }) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.empresa = empresa;
		this.email = email;
		this.tipo = tipo;
	}
}

module.exports = { Cliente };
