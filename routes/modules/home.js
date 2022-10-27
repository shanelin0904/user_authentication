// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const auth = require('../../utilities/auth')
// 產生初始頁面

router.get('/logout', auth, (req, res) => {
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  res.redirect('/')
})
router.get('/login', auth, (req, res) => {
  const userName = req.session.user
  console.log(req.session)
  return res.render('login', {
    firstName: userName
  })
})

router.get('/', (req, res) => {
    console.log(req.session)
    console.log(req.sessionID) 
    res.render('index')
  
  
})

router.post('/', (req, res) => {
  let Data = req.body
  User.findOne(Data)
  .then(userdata => {
    if (!userdata) {
       
      return res.render('index' , { wrongMessage:"Wrong PASSWORD OR EMAIL ! PLEASE TRY AGAIN !"})
      }
      req.session.user = userdata.firstName
      console.log(req.sessionID)
      res.redirect('/login')
    })
})


module.exports = router