const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/react-chat'
mongoose.connect(DB_URL)
// mongoose.on('connected', () => console.log('mongodb connected'))

const User = mongoose.model('user', new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
}))

// User.create({name: 'imooc', age: 10}, (err, doc) => {
//   if (err) console.log(err)
//   else console.log(doc)
// })

// User.remove({name: 'imooc'}, (err, doc) => {
//   console.log(doc)
// })

// User.update({name: 'huangjiaqi'},{$set: {age: 22}}, (err, doc) => {
//   console.log(doc)
// })


const app = express()

app.get('/', (req, res) => {
  res.send('<p>Hellow world !</p>')
})

app.get('/data', (req, res) => {
  User.findOne({name: 'huangjiaqi'}, (err, doc) => {
    res.json(doc)
  })
})

app.listen(2222, () => {
  console.log('Server started on port 2222')
})