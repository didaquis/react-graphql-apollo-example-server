const { merge } = require('lodash');

const clientes = require('./clientes');
const productos = require('./productos');

module.exports = merge(
	productos,
	clientes
);
