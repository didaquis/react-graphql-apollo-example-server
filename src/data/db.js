require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DB;
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;

if (mongoUser !== '' && mongoPass !== '') {
	// Si me especifican usuario y password...
	mongoose.connect(`mongodb://${mongoUser}:${mongoPass}@${host}:${port}/${database}`, { useNewUrlParser: true });
} else {
	mongoose.connect(`mongodb://${host}:${port}/${database}`, { useNewUrlParser: true });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, '\nConnection error with database:')); // eslint-disable-line no-console
db.once('open', () => {
	console.log(`\nConnected with mongodb at "${host}" in port "${port}" using database "${database}"`); // eslint-disable-line no-console
});

const clientesSchema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	empresa: String,
	email: String,
	tipo: String,
	pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);

module.exports = Clientes;
