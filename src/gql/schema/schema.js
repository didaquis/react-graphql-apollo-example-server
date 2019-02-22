const { importSchema } = require('graphql-import');

const typeDefs = importSchema('src/gql/schema/schema.graphql'); /* Warning: Must be an absolute path */

module.exports = typeDefs;
