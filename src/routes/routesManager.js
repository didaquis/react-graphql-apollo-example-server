const { Router } = require('express');
const routesManager = Router();

routesManager.get('/', (req, res) => {
	res.send('WIP');
});

const graphqlHTTP = require('express-graphql');

const schema = require('../schema/schema'); /* GraphQL schema */
const resolvers = require('../resolver/resolvers'); /* GraphQL resolver */

routesManager.use('/graphql', graphqlHTTP(
	{
		schema: schema, // schema a utilizar
		rootValue: resolvers, // resolvers a utilizar
		graphiql: true // habilitamos graphiql
	}
));

module.exports = routesManager;
