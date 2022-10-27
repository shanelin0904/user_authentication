function auth(req, res, next) {
  if (req.session.user) {
    console.log('authenticated')
    next()
  } else {
    console.log('not authenticated')
    console.log(req.session.user)
    return res.redirect('/')
  }
}

module.exports = auth