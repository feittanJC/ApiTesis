const {config} = require('dotenv') 


config()

console.log(process.env.PORT)


const PORT = process.env.PORT || 4000

const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_DATABASE = process.env.DB_DATABASE || 'proyecto'
const DB_PORT = process.env.DB_PORT || 3306

module.exports = {
    PORT, DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE, DB_PORT
 };
