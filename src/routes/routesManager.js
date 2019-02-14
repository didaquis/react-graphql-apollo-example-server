const { Router } = require('express');
const routesManager = Router();


routesManager.get('/', (req, res) => {
	res.send('WIP');
});


const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema'); /* GraphQL schema */
const root = { hola: () => 'Hola mundo desde GraphQL' }; /* GraphQL resolver */

routesManager.use('/graphql', graphqlHTTP(
	{
		schema: schema, // schema a utilizar
		rootValue: root, // resolver a utilizar
		graphiql: true // habilitamos graphiql

	}
));

module.exports = routesManager;