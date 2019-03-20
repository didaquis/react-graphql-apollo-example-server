const { merge } = require('lodash');

const clientes = require('./clientes');
const productos = require('./productos');
const pedidos = require('./pedidos');

module.exports = merge(
	clientes,
	productos,
	pedidos
);
