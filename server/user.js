const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = { pwd: 0, __v: 0 }

// 调试接口
// Router.get('/list', (req, res) => {
//   User.remove({}, (err, doc) => {})
//   User.find({}, (err, doc) => {
//     return res.json(doc)
//   })
// })

const md5Pwd = (pwd) => {
  const salt = 'DNS91rh0J:"D@($!)@$&Ee("p~)!e+10  E'
  return utils.md5(utils.md5(salt + pwd))
}


Router.get('/info', (req, res) => {
  const userId = req.cookies.userId
  if (!userId) {
    return res.json({ code: 1 })
  }

  User.findById(userId, _filter, (err, doc) => {
    if (err) return res.json({ code: 1, msg: '后端出错了' })

    return res.json({ code: 0, data: doc })
  })
})

Router.post('/register', (req, res) => {
  const { name, pwd, type } = req.body

  User.findOne({name}, (err, doc) => {
    if (doc) return res.json({ code: 1, msg: '用户名重复' })

    const userModel = new User({ name, type, pwd: md5Pwd(pwd) })
    userModel.save((e, d) => {
      if (e) return res.json({ code: 1, msg: '后端出错了' })

      const {name, type, _id } = d
      res.cookie('userId', _id)
      return res.json({ code: 0, data: { name, type, _id } })
    })
  })
})

Router.post('/login', (req, res) => {
  const { name, pwd } = req.body
  User.findOne({ name, pwd: md5Pwd(pwd) }, _filter, (err, doc) => {
    if (!doc) return res.json({ code: 1, msg: '用户名或密码不存在' })

    res.cookie('userId', doc._id)
    return res.json({ code: 0, data: doc })
  })
})

Router.post('/update', (req, res) => {
  const userId = req.cookies.userId
  
  if (!userId) return json.dump({ code: 1 })
  else {
    User.findByIdAndUpdate(userId, req.body, (err, doc) => {
      const data = Object.assign({}, {
        name: doc.name,
        type: doc.type
      }, req.body)

      return res.json({ code: 0, data })
    })
    
  }
})


module.exports = Router
