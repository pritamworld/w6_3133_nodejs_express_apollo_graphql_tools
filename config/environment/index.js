const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  staging: process.env.NODE_ENV === 'staging',
  production: process.env.NODE_ENV === 'production',
}

const mongo_database_url = {
  url: process.env.MONGO_URI,
}

module.exports = { port, env, mongo_database_url }
