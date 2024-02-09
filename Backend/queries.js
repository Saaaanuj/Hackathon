const checkUser = "SELECT * FROM students WHERE username=$1";
const checkPass = "SELECT * FROM students WHERE username=$1 AND password=$2";
const addUser =
	"INSERT INTO students (name,username,password,hostel) VALUES($1,$2,$3,$4)";

module.exports = {
	checkUser,
	checkPass,
	addUser,
};
