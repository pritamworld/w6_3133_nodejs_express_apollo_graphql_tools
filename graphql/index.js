const { ApolloServer } = require('apollo-server-express')
const { env } = require('../config/environment')
const schema = require('./schema')

exports.apolloServer = new ApolloServer({
  schema,
  playground: env.development,
})