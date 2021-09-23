require("dotenv").config();

const NY_API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_API_KEY);
console.log(NY_API_KEY);

module.exports = { NYT_API : NY_API_KEY }