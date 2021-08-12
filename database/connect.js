const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const connectionString = process.env.DATABASE_URL
const db = pg.pool({connectionString});

module.exports=(db);