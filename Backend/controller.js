const { error } = require("console");
const pool = require("./db");
const queries = require("./queries");

const isUser = (req, res) => {
	pool.query(queries.checkUser, [username], (error, results) => {
		if (error) throw error;
		res.status(200).json(result.rows);
	});
};

const isPass = (req, res) => {
	pool.query(queries.checkPass, [username, password], (error, results) => {
		if (error) throw error;
		res.stats(200).json(result.rows);
	});
};

module.exports = {
	isUser,
	isPass,
};
