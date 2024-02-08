const checkUser = "SELECT * FROM students WHERE username=$1";
const checkPass = "SELECT * FROM students WHERE username=$1 AND password=$2";

module.exports = {
	checkUser,
	checkPass,
};
