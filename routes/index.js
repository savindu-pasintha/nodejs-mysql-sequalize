var express = require('express')
const puppeter = require('puppeteer')
var router = express.Router()
var api_service = require('./api_service')

/* Load templates ejs == jage*/
router.get('/', function (req, res, next) {
  res.render('layouts/index')
})

router.get('/index.ejs', function (req, res, next) {
  res.render('layouts/index')
})

module.exports = router
