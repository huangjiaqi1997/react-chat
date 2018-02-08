const express = require('express')
const utils = require('utility')
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

const md5Pwd = (pwd) => {
  const salt = 'DNS91rh0J:"D@($!)@$&Ee("p~)!e+10  E'
  return utils.md5(utils.md5(salt + pwd))
}


Router.get('/info', (req, res) => {
  return res.json({code: 1})
})

Router.post('/register', (req, res) => {
  const { name, pwd, type } = req.body

  User.findOne({name}, (err, doc) => {
    if (doc) return res.json({ code: 1, msg: '用户名重复' })

    User.create({name, type, pwd: md5Pwd(pwd)}, (e, d) => {
      if (e) return res.json({ code: 1, msg: '后端出错了' })

      const { name, type } = d
      return res.json({ code: 0, data: { name, type } })
    })
  })
})

module.exports = Router
