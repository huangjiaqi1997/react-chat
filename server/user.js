const express = require('express')
const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')

// User.remove({name: 'huangjiaqia'}, (err, doc) => {
//   console.log(doc)
// })

// 调试接口
Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc)
  })
})


Router.get('/info', (req, res) => {
  return res.json({code: 1})
})

Router.post('/register', (req, res) => {
  const { name } = req.body

  User.findOne({name}, (err, doc) => {
    if (doc) return res.json({ code: 1, msg: '用户名重复' })

    User.create(req.body, (e, d) => {
      if (e) return res.json({ code: 1, msg: '后端出错了' })

      return res.json({ code: 0 })
    })
  })
})

module.exports = Router
