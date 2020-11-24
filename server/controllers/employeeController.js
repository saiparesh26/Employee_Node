const fs = require('fs');
const logger = require('../middleware/logger');
const writeDataToFile = require('../utils/writeDataToFile');
const employees = require('../data/employee.json');

const getEmployees = (req, res) => {
  console.log(employees);
  res.status(200).json(employees);
};

const getEmployeeById = (req, res) => {
  const { id } = req.params;

  const employee = employees.find((employee) => employee.id == id);

  if (!employee) {
    const error = {
      method: req.method,
      URL: req.originalUrl,
      error: 'Invalid User ID',
      id,
    };

    logger.info('Invalid Request : ', error);

    return res
      .status(400)
      .json({ message: 'Invalid user id entered. Not found' });
  }
  res.status(200).json(employee);
};

const createEmployee = (req, res) => {
  const { name, age, dob, designation, joiningData } = req.body;
  const employee_ids = employees.map((employee) => employee.id);

  const new_employee_id =
    (employee_ids.length > 0 ? Math.max(...employee_ids) : 0) + 1;

  const new_employee = {
    id: new_employee_id,
    name,
    age,
    dob,
    designation,
    joiningData,
  };

  const new_employees = employees.concat(new_employee);
  writeDataToFile(new_employees);
  res.status(201).json(new_employee);
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
};
