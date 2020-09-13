const express = require("express")
const product = require('./Routes/Product')
const history = require('./Routes/History')
const category = require('./Routes/Category')
const users = require('./Routes/Users')
const auth = require('./Routes/Auth')
const Routes = express.Router()

Routes.use("/product", product)
Routes.use("/history", history)
Routes.use("/category", category)
Routes.use("/users", users)
Routes.use("/auth", auth)



module.exports = Routes