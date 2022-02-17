import { employeeQueries, employeeMutations } from './employee'

const resolvers = {
    Query: {
      ...employeeQueries
    },
    Mutation: {
      ...employeeMutations
    }
}
  
  export default resolvers;