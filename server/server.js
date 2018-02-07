const express = require('express')
const userRouter = require('./user')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(cookieParser())
app.use(bodyParser())
app.use('/user', userRouter)

app.listen(2222, () => {
  console.log('Server started on port 2222')
})
