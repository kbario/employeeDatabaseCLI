const cTable = require("console.table");
const { departmentQ, roleQ, employeeQ, employeeDisplayQ, updateEmpRoleQ, updateEmpManagerQ, deleteDepartmentQ, deleteRoleQ, deleteEmployeeQ } = require('./questions');
const inquirer = require('inquirer');
const {displayDepartmentQuery, displayRolesQuery, displayEmployeeQuery, getEmployeeByDepartmentQuery, getEmployeeByManagerQuery, getBudgetOfDepartmentsQuery, postDepartment, postRole, getAllDepartmentQuery, getRoleIdAndTitleQuery, getManagersQuery, postEmployee, getEmployeesAndRoleQuery, updateRoleQuery, updateDepartmentQuery, deleteDepartmentQuery, deleteRoleQuery, deleteEmployeeQuery } = require('./queries');

// query database for info

async function queryExistingData(db, query) {
    return await db.promise().query(query).then(res => console.table('', res[0]));
}


// do the create functions

// helper functions for create functions
function cloneArray(arr){
    return JSON.parse(JSON.stringify(arr))
}

function helperFunc1(sf, questionsss, index, addNull){
    for (let item of sf) {
        questionsss[index].choices.push(Object.values(item)[1])
    }
    questionsss[index].choices.push('Quit')
    if (addNull === true){
        questionsss[index].choices.push('None')
    }
}

function helperFunc2(objs, toMatch) {
    let id;
    for (let obj of objs) {
        if(toMatch === obj[Object.getOwnPropertyNames(obj)[1]]){
            return id = obj[Object.getOwnPropertyNames(obj)[0]]
        }
    }
}


// create departments
async function addDepartment(db){
    const {name} = await inquirer.prompt(departmentQ)
    const [{affectedRows} = ResultSetHeader] = await db.promise().query(postDepartment, name);
    affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m')
}

// create roles
async function addRole(db){
    const ques = cloneArray(roleQ)
    const sf = await db.promise().query(getAllDepartmentQuery).then((res) => { return res[0] });
    helperFunc1(sf, ques, 2, false)
    const {name, salary, belong} = await inquirer.prompt(ques)
    if (belong === "Quit"){
        return
    }
    const id1 = helperFunc2(sf, belong)
    const [{affectedRows} = ResultSetHeader] = await db.promise().query(postRole, [name, salary, id1]);
    affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m')
}

// create employee
async function addEmployee(db){
    const ques = cloneArray(employeeQ);
    const sf = await db.promise().query(getRoleIdAndTitleQuery).then((res) => { return res[0] });
    const df = await db.promise().query(getManagersQuery).then((res) => { return res[0] });
    helperFunc1(sf, ques, 2, false);
    helperFunc1(df, ques, 3, true);
    const {first, last, role, manager} = await inquirer.prompt(ques);
    if (role === "Quit" || manager === "Quit"){
        return
    }
    const id1 = helperFunc2(sf, role);
    const id2 = helperFunc2(df, manager);
    if (id2 === undefined){
        const [{affectedRows} = ResultSetHeader] = await db.promise().query(postEmployee, [first, last, id1, null]);
        affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m')
    } else {
        const [{affectedRows} = ResultSetHeader] = await db.promise().query(postEmployee, [first, last, id1, id2]);
        affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m')
    }
}

async function updateEmployeRole(db){
    const ques = cloneArray(employeeDisplayQ);
    const ques2 = cloneArray(updateEmpRoleQ);
    const df = await db.promise().query(getEmployeesAndRoleQuery).then((res) => { return res[0] });
    helperFunc1(df, ques, 0, false);
    const {display} = await inquirer.prompt(ques);
    if (display === "Quit" ){
        return
    }
    const sf = await db.promise().query(getRoleIdAndTitleQuery).then((res) => { return res[0] });
    helperFunc1(sf, ques2, 0);
    const {role} = await inquirer.prompt(ques2);
    if (role === "Quit" ){
        return
    }
    const id1 = helperFunc2(df, display)
    const id2 = helperFunc2(sf, role)
    const [{affectedRows} = ResultSetHeader] = await db.promise().query(updateRoleQuery, [id2, id1]);
    affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m');
}
async function updateEmployeManager(db){
    const ques = cloneArray(employeeDisplayQ);
    const df = await db.promise().query(getEmployeesAndRoleQuery).then((res) => { return res[0] });
    helperFunc1(df, ques, 0, false);
    const {display} = await inquirer.prompt(ques);
    if (display === "Quit" ){
        return
    }
    const sf = await db.promise().query(getManagersQuery).then((res) => { return res[0] });
    const ques2 = cloneArray(updateEmpManagerQ);
    helperFunc1(sf, ques2, 0, true);
    const {manager} = await inquirer.prompt(ques2);
    if (manager === "Quit" ){
        return
    }
    const id1 = helperFunc2(df, display)
    const id2 = helperFunc2(sf, manager)
    if (id2 === undefined){
        const [{affectedRows} = ResultSetHeader] = await db.promise().query(updateDepartmentQuery, [null, id1]);
        affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m')
    } else {
        const [{affectedRows} = ResultSetHeader] = await db.promise().query(updateDepartmentQuery, [id2, id1]);
        affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m')
    }
}
async function deleteDepartment(db){
    const ques = cloneArray(deleteDepartmentQ);
    const df = await db.promise().query(getAllDepartmentQuery).then((res) => { return res[0] });
    helperFunc1(df, ques, 0);
    const {department} = await inquirer.prompt(ques);
    if (department === "Quit" ){
        return
    }
    const id1 = helperFunc2(df, department)
    const [{affectedRows} = ResultSetHeader] = await db.promise().query(deleteDepartmentQuery, id1);
    affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m');
}
async function deleteRole(db){
    const ques = cloneArray(deleteRoleQ);
    const df = await db.promise().query(getRoleIdAndTitleQuery).then((res) => { return res[0] });
    helperFunc1(df, ques, 0);
    const {role} = await inquirer.prompt(ques);
    if (role === "Quit" ){
        return
    }
    const id1 = helperFunc2(df, role)
    const [{affectedRows} = ResultSetHeader] = await db.promise().query(deleteRoleQuery, id1);
    affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31mFialed!\x1B[0m');
}
async function deleteEmployee(db){
    const ques = cloneArray(deleteEmployeeQ);
    const df = await db.promise().query(getEmployeesAndRoleQuery).then((res) => { return res[0] });
    helperFunc1(df, ques, 0);
    const {employee} = await inquirer.prompt(ques);
    if (employee === "Quit" ){
        return
    }
    const id1 = helperFunc2(df, employee)
    const [{affectedRows} = ResultSetHeader] = await db.promise().query(deleteEmployeeQuery, id1);
    affectedRows >= 1 ? console.log('\x1B[1;32mSuccess!\x1B[0m') : console.log('\x1B[1;31fmFialed!\x1B[0m');
}


// combine all into if function

async function determineAndDoAction(userInput, db){
    if (userInput === "View All Departments"){
        return await queryExistingData(db, displayDepartmentQuery)
    } else if (userInput === "View all Roles"){
        return await queryExistingData(db, displayRolesQuery)
    } else if (userInput === "View all Employees"){
        return await queryExistingData(db, displayEmployeeQuery)
    } else if (userInput === "View all Employees by Department"){
        return await queryExistingData(db, getEmployeeByDepartmentQuery)
    } else if (userInput === "View all Employees by Manager"){
        return await queryExistingData(db, getEmployeeByManagerQuery)
    } else if (userInput === "View Total Employee Salary by Department"){
        return await queryExistingData(db, getBudgetOfDepartmentsQuery)
    } else if (userInput === "Add a Department"){
        return await addDepartment(db)
    } else if (userInput === "Add a Role"){
        return await addRole(db)
    } else if (userInput === "Add an Employee"){
        return await addEmployee(db)
    } else if (userInput === "Update an Employee Role"){
        return await updateEmployeRole(db)
    } else if (userInput === "Update an Employee Manager"){
        return await updateEmployeManager(db)
    } else if (userInput === "Delete a Department"){
        return await deleteDepartment(db)
    } else if (userInput === "Delete a Role"){
        return await deleteRole(db)
    } else if (userInput === "Delete a Employee"){
        return await deleteEmployee(db)
    }

}

module.exports = {
    determineAndDoAction
}


