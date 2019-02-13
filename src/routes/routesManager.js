const { Router } = require('express');
const routesManager = Router();


routesManager.get('/', (req, res) => {
	res.send('WIP');
});

module.exports = routesManager;