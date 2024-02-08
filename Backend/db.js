const POOL = require("pg").Pool;

const pool = new POOL({
	user: "postgres",
	host: "localhost",
	database: "students",
	password: "12345678a",
	port: 5432,
});

module.exports = pool;
