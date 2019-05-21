'use strict';

const jwt = require('jsonwebtoken');

const crearToken = ({ usuario }, secreto, tiempoExpiracion = '2h') => {
	return jwt.sign({ usuario }, secreto, { expiresIn: tiempoExpiracion });
};

module.exports = {
	crearToken
};