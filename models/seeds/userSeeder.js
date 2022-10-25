const User = require('../user') // 載入 user model
const userList = require('../../user.json').users// 載入種子json
const db = require('../../config/mongoose')
db.once('open', () => {
  console.log('running userSeeder script...')
  User.create(userList)
    .then(() => {
      console.log('userSeeder done!')
      db.close()
    })
    .catch(err => console.log(err))
})