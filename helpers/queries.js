const displayDepartmentQuery = 'SELECT departments.id AS ID, departments.department_name AS `Department Name` FROM departments';
const getAllDepartmentQuery = 'SELECT * FROM departments';

const displayRolesQuery = 'SELECT roles.id AS ID, roles.title AS Title, roles.salary AS Salary, departments.department_name AS `Department Name` FROM roles LEFT JOIN departments ON roles.department_id = departments.id';
const getRoleIdAndTitleQuery = 'SELECT roles.id, roles.title FROM roles ';

const displayEmployeeQuery = 'SELECT e.id AS ID, CONCAT(e.first_name, " ", e.last_name) AS Name, roles.title AS Position, roles.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager, departments.department_name AS Department FROM employees e LEFT JOIN employees m ON m.id = e.manager_id LEFT JOIN roles ON e.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id ORDER BY ID';
const getEmployeesAndRoleQuery = 'SELECT employees.id, CONCAT(employees.first_name, " ", employees.last_name), roles.title FROM employees LEFT JOIN roles ON employees.role_id = roles.id'

const getManagersQuery = 'SELECT employees.id, CONCAT(employees.first_name, " ", employees.last_name) FROM employees LEFT JOIN roles ON employees.role_id = roles.id WHERE title = "Manager"'

const getEmployeeByDepartmentQuery = 'SELECT e.id AS ID, CONCAT(e.first_name, " ", e.last_name) AS Name, roles.title AS Position, roles.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager, departments.department_name AS Department FROM employees e LEFT JOIN employees m ON m.id = e.manager_id LEFT JOIN roles ON e.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id ORDER BY Department';

const getEmployeeByManagerQuery = 'SELECT e.id AS ID, CONCAT(e.first_name, " ", e.last_name) AS Name, roles.title AS Position, roles.salary AS Salary, CONCAT(m.first_name, " ", m.last_name) AS Manager, departments.department_name AS Department FROM employees e LEFT JOIN employees m ON m.id = e.manager_id LEFT JOIN roles ON e.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id ORDER BY Manager';

const getBudgetOfDepartmentsQuery = 'SELECT CONCAT("$", SUM(roles.salary)) AS `Total Salary`, departments.department_name AS Departments FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id GROUP BY Departments';

const postDepartment = 'INSERT INTO departments (department_name) VALUES (?)';
const postRole = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
const postEmployee = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';

const updateRoleQuery = 'UPDATE employees SET role_id = ? WHERE id = ?';
const updateDepartmentQuery = 'UPDATE employees SET manager_id = ? WHERE id = ?';

const deleteDepartmentQuery = 'DELETE FROM departments WHERE id = ?';
const deleteRoleQuery = 'DELETE FROM roles WHERE id = ?';
const deleteEmployeeQuery = 'DELETE FROM employees WHERE id = ?';

module.exports = {
    displayDepartmentQuery,
    getAllDepartmentQuery,
    displayRolesQuery,
    getRoleIdAndTitleQuery,
    getEmployeesAndRoleQuery,
    displayEmployeeQuery,
    getManagersQuery,
    getEmployeeByDepartmentQuery,
    getEmployeeByManagerQuery,
    getBudgetOfDepartmentsQuery,
    postDepartment,
    postRole,
    postEmployee,
    updateRoleQuery,
    updateDepartmentQuery,
    deleteDepartmentQuery,
    deleteRoleQuery,
    deleteEmployeeQuery
};