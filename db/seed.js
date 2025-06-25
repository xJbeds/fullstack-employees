import db from "#db/client";
import { createEmployee } from './queries/employees.js'

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  console.log('ADDING EMPLOYEES')
  await createEmployees({name:'Jason Bourne', birthday:'1991-01-05', salary:100000})
  await createEmployees({name:'Frodo Baggins', birthday:'1987-02-06', salary:125000})
  await createEmployees({name:'Harry Potter', birthday:'1983-03-07', salary:150000})
  await createEmployees({name:'Anakin Skywalker', birthday:'1979-04-08', salary:175000})
  await createEmployees({name:'Seth Rogen', birthday:'1975-05-09', salary:200000})
  console.log('EMPLOYEES ADDED')
}
