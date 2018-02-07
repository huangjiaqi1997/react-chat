const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/react-chat'

mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => console.log('mongodb connected'))


const models = {
  user: {
    name: { type: String, required: true },
    pwd: { type: String, required: true },
    type: { type: String, required: true },
    avatar: { type: String },
    dec: { type: String },
    title: { type: String },
    company: { type: String },
    money: { type: String }
  },

  chat: {

  }
}

for(key in models) {
  mongoose.model(key, new mongoose.Schema(models[key]))
}

module.exports = {
  getModel(key) {
    return mongoose.model(key)
  }
}
// User.findOne({name: 'huangjiaqi'}, (err, doc) => {
//   res.json(doc)
// })
// User.create({name: 'imooc', age: 10}, (err, doc) => {
//   if (err) console.log(err)
//   else console.log(doc)
// })

// User.remove({name: 'huangjiaqi'}, (err, doc) => {
//   console.log(doc)
// })

// User.update({name: 'huangjiaqi'},{$set: {age: 22}}, (err, doc) => {
//   console.log(doc)
// })