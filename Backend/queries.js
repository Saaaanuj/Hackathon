const checkUser = "SELECT * FROM students WHERE username=$1";
const checkPass = "SELECT * FROM students WHERE username=$1 AND password=$2";
const addUser =
	"INSERT INTO students (name,username,password,hostel) VALUES($1,$2,$3,$4)";
const menu_breakfast = "SELECT * FROM menu WHERE time=breakfast";
const menu_lunch = "SELECT * FROM menu WHERE time=breakfast";
const menu_dinner = "SELECT * FROM menu WHERE time=breakfast";

module.exports = {
	checkUser,
	checkPass,
	addUser,
	menu_breakfast,
	menu_lunch,
	menu_dinner,
};
