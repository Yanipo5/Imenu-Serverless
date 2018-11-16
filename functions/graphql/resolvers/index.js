const mergeGraphqlSchemas = require("merge-graphql-schemas");
const User = require("./User/");

const resolvers = [User];

module.exports = mergeGraphqlSchemas.mergeResolvers(resolvers);
