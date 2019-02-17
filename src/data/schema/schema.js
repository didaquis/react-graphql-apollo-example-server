const resolvers = require('../resolver/resolvers');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = importSchema('src/data/schema/schema.graphql'); /* Warning: Must be an absolute path */

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;
