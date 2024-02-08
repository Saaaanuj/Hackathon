const pool = require("./db");
const queries = require("./queries");

const isUser = async (data) => {
	const { username } = data;
	try {
		const result = await pool.query(queries.checkUser, [username]);
		if (result.rows.lenght > 0) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw error;
	}
};

const isPass = async (data) => {
	const { username, password } = data;
	const result = pool.query(queries.checkPass, [username, password]);
	try {
		const result = await pool.query(queries.checkUser, [username, password]);
		if (result.rows.lenght > 0) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		throw error;
	}
};

module.exports = {
	isUser,
	isPass,
};
