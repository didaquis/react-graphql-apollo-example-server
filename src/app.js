'use strict';

require('dotenv').config();

const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

const mongoose = require('mongoose');
if (mongoUser !== '' && mongoPass !== '') {
	mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@${host}:${port}/${database}`, { useNewUrlParser: true });
} else {
	mongoose.connect(`mongodb://${host}:${port}/${database}`, { useNewUrlParser: true });
}

const db = mongoose.connection;
db.on('error', (err) => {
	console.error(`\nConnection error with database. ${err}`); // eslint-disable-line no-console
});

db.once('open', () => {
	console.log(`\nConnected with mongodb at "${host}" in port "${port}" using database "${database}"`); // eslint-disable-line no-console

	initApplication();
});

const initApplication = () => {
	const express = require('express');
	const app = express();

	const routesManager = require('./routes/routesManager');
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
