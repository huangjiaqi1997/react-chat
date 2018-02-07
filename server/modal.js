const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/react-chat'

mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => console.log('mongodb connected'))



// User.findOne({name: 'huangjiaqi'}, (err, doc) => {
//   res.json(doc)
// })
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