// 載入專案需要用到的框架和工具包(Packages)
const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require("express-session")
require('./config/mongoose')
// 引用路由器
const routes = require('./routes')
//樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    secret: "I knew a guy whose name is Kei Nastsume ",
    name: 'user', // optional
    resave: false,
    saveUninitialized: true
  })
)
app.use(routes)

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})