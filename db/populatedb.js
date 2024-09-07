#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  firstName VARCHAR (255),
  lastName VARCHAR (255),
  status BOOLEAN ,
  password VARCHAR (255)
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://deetsy4455:ADEEPS7315@localhost:5432/authent",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
