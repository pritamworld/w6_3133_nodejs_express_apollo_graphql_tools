const { employeeQueries, employeeMutations } = require('./employee')

exports.resolvers = {
    Query: {
      ...employeeQueries
    },
    Mutation: {
      ...employeeMutations
    }
}