// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const User = require('../../models/user')
// 產生初始頁面


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  console.log(req.body.email, req.body.password)
  User.findOne({ "email": req.body.email,"password": req.body.password
})
  .then(userdata => {
    console.log(userdata)
    if (!userdata) {
       
      return res.render('index' , { wrongMessage:"Wrong PASSWORD OR EMAIL ! PLEASE TRY AGAIN !"})
      }
      res.render('login', { firstName: userdata.firstName })
    })
})


module.exports = router