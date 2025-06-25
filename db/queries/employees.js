import db from '#db/client'

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
   
  const sql = ` 
  INSERT INTO movies (name, birthday, salary)
  VALUES ($1, $2, $3)
  RETURNING *;
  `
  const { rows: [createdEmployee] } = await db.query(sql, [name, birthday, salary])
  return createdEmployee

}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
    const sql = `
  SELECT *
  FROM employees
  `;
  const { rows: employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
