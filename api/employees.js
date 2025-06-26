import express from "express";
const router = express.Router();
export default router;

import { getEmployees, createEmployee } from "#db/queries/employees";

router.route("/").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});

router.route('/').post(async (request, response) => {
  console.log('BODY', request.body)
  if(
    !request.body || 
    !request.body.name || 
    !request.body.birthday || 
    !request.body.salary) {
    response.status(400).send('No body given')
  } else {
  const newEmployee = await createEmployee(request.body)
  response.status(201).send(newEmployee)
  }
})