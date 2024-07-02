require('dotenv').config()
const express = require('express')
const notFound = require('./middlewares/not-found')
const errorMw = require('./middlewares/error-mw')
const authRoute = require('./routes/auth-route')
const app = express()
const todoRoute = require('./routes/todo-route')

app.use('/auth',authRoute )
app.use('/todo', todoRoute)

console.log('rt01')

app.use(notFound)
app.use(errorMw)
const port = process.env.PORT || 8000
app.listen(port, ()=>console.log('Server running on',port))