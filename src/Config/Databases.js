const Pool = require('pg-pool')

const mydb = new Pool({
    user: "postgres",
    database: "OnlineShop",
    password: "anjayman123",
    host: "localhost"
})

module.exports = mydb