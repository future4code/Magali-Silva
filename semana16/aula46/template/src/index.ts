import knex from "knex";
import express, { Express } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getActorById } from "./endpoints/getActorById";
import { searchActorByName } from "./endpoints/searchActorByName";
import { getCountActorByGender } from "./endpoints/getCountActorByGender";
import { averageSalaryByGender } from "./data/averageSalaryByGender";
import { createNewActor } from "./endpoints/createNewActor";
import { updateActorSalary } from "./endpoints/updateActorSalary";
import { deleteActor } from "./endpoints/deleteActor";

dotenv.config();

export const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();

app.use(express.json());

app.get('/actor/:id', getActorById);

app.get('/actor/search/:name', searchActorByName);

app.get('/actor', getCountActorByGender)

app.put('/actor', createNewActor)

app.post('/actor/salary', updateActorSalary)

app.delete('/actor/:id', deleteActor)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

averageSalaryByGender("female") // teste, ainda sem endpoint // ok
averageSalaryByGender("male") // teste, ainda sem endpoint // ok