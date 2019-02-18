const { Router } = require('express');
const routesManager = Router();

routesManager.get('/', (req, res) => {
	res.send('WIP');
});

const graphqlHTTP = require('express-graphql');

const schema = require('../gql/schema/schema'); /* GraphQL schema */

routesManager.use('/graphql', graphqlHTTP(
	{
		schema: schema, // schema a utilizar
		graphiql: true // habilitamos graphiql
	}
));

module.exports = routesManager;
