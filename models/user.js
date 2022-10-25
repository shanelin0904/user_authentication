const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  firstName: {
    type: String, // 資料型別是字串
    required: true
  }
  , email: {
    type: String, // 資料型別是字串
    required: true
  }
  , password: {
    type: String, // 資料型別是字串
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)