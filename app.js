var express = require('express')
var createError = require('http-errors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var app = express()
require('dotenv').config()

const sequelize = require('./sequelize-mysql-database/sequalizeDatabaseConnection')
const dishTable = require('./sequelize-mysql-database/sequelize-models/dishTable')
const categoryTable = require('./sequelize-mysql-database/sequelize-models/categoryTable')
const menuTable = require('./sequelize-mysql-database/sequelize-models/menuTable')
const restaurentTable = require('./sequelize-mysql-database/sequelize-models/restaurentTable')
const ratingTable = require('./sequelize-mysql-database/sequelize-models/ratingTable')
const userTable = require('./sequelize-mysql-database/sequelize-models/userTable')

//routes
const indexRouter = require('./routes/index')
const authenticationRouter = require('./routes/authentication')
const restaurentRouter = require('./routes/restaurent')
const { Sequelize } = require('sequelize')

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs') //ejs or jade

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: process.env.FRONTEND_IP || '*' }))
app.use(logger('dev'))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/restaurent', restaurentRouter)
app.use('/api/', authenticationRouter)

//mysql sequelize database sync
try {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch((err) => {
      console.log('connection err : \n', err)
    })
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

// dishTable.hasOne(categoryTable);
// categoryTable.belongsTo(dishTable);

try {
  sequelize
    .sync()
    .then((res) => console.log(res, '\n', 'successfully database sync.'))
    .catch((err) => console.log(err))
} catch (err) {
  console.log(err)
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
