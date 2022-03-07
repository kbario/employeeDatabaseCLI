const menu = {
    type: "list",
    name: "do",
    message: "What would you like to do?",
    choices: ["View All Departments", "View all Roles", "View all Employees", "View all Employees by Department", "View all Employees by Manager", "View Total Employee Salary by Department", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Update an Employee Manager", "Delete a Department", "Delete a Role", "Delete a Employee", "Quit"]
}

const departmentQ = [
    {
        type: "input",
        name: "name",
        message: "What is the Name of this Department?",
    },
]

const roleQ = [
    {
        type: "input",
        name: "name",
        message: "What is the Name of this Role?",
    }, {
        type: "input",
        name: "salary",
        message: "What is the Salary of this Role?",
    }, {
        type: "list",
        name: "belong",
        message: "What Department does this Role belong to?",
        choices: []
    },
]
const employeeQ = [
    {
        type: "input",
        name: "first",
        message: "What is this Employee's First Name?",
    }, {
        type: "input",
        name: "last",
        message: "What is this Employee's Last Name?",
    }, {
        type: "list",
        name: "role",
        message: "What is this Employee's Role?",
        choices: []
    }, {
        type: "list",
        name: "manager",
        message: "Who is this Employee's Manager?",
        choices: []
    }
]

const employeeDisplayQ = [
    {
        type: "list",
        name: "display",
        message: "What Employee do you want to Update?",
        choices: []
    }
]
    
const updateEmpRoleQ = [
    {
        type: "list",
        name: "role",
        message: "What Role do you want to give this Employee?",
        choices: []
    }
]
    
const updateEmpManagerQ = [
    {
        type: "list",
        name: "manager",
        message: "What Manager do you want to give this Employee?",
        choices: []
    }
]
    
const deleteDepartmentQ = [
    {
        type: "list",
        name: "department",
        message: "What Department do you want to Delete?",
        choices: []
    }
]

const deleteRoleQ = [
    {
        type: "list",
        name: "role",
        message: "What Role do you want to Delete?",
        choices: []
    }
]

const deleteEmployeeQ = [
    {
        type: "list",
        name: "employee",
        message: "What Employee do you want to Remove?",
        choices: []
    }
]

module.exports = {
    menu,
    departmentQ,
    roleQ,
    employeeQ,
    employeeDisplayQ,
    updateEmpRoleQ,
    updateEmpManagerQ,
    deleteDepartmentQ,
    deleteRoleQ,
    deleteEmployeeQ
}