const express = require('express')
const userRouter = require('./user')

const app = express()

app.use('/user', userRouter)

app.listen(2222, () => {
  console.log('Server started on port 2222')
})