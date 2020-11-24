const { Router } = require('express');
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
} = require('../controllers/employeeController');

const router = Router();

router.route('/').get(getEmployees).post(createEmployee);

router.route('/:id').get(getEmployeeById);

module.exports = router;
