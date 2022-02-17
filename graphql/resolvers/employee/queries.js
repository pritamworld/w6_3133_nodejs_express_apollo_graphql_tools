const employeeQueries = {
    getEmployees: async (parent, args) => {
        return Employee.find({})
    },
    getEmployeeByID: async (parent, args) => {
        return Employee.findById(args.id)
    },
    getEmployeeByGender: async (parent, args) => {
        return Employee.find({"gender" : args.gender})
    }
}

export default employeeQueries