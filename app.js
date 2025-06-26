import express from "express";
const app = express();
export default app;

app.use(express.json());

import router from './api/employees.js'
app.use('/employees', router)


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});
