'use strict';

require('dotenv').config();
const express = require('express');

const routesManager = require('./routes/routesManager');

const initAPI = () => {
	const app = express();

	app.use('', routesManager);

	app.use((req, res) => {
		res.status(404).send('404'); // eslint-disable-line no-magic-numbers
	});

	const portByDefault = 8080;
	const port = process.env.PORT || portByDefault;
	app.listen(port, () => console.log(`\nApplication running on port: ${port}`)); // eslint-disable-line no-console

	// managing stop shutdown
	process.on('SIGINT', () => {
		console.log('\nStopping application...'); // eslint-disable-line no-console
		process.exit();
	});
};

initAPI();
