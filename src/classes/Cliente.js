class Cliente {
	constructor (id, { nombre, apellido, empresa, email, tipo, pedidos }) {
		this.id = id;
		this.nombre = nombre;
		this.apellido = apellido;
		this.empresa = empresa;
		this.email = email;
		this.tipo = tipo;
		this.pedidos = pedidos;
	}
}

module.exports = { Cliente };
