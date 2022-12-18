var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')
const userTable = require('../sequelize-mysql-database/sequelize-models/userTable')

//https://www.npmjs.com/package/jsonwebtoken
// MySqlQueryExecute("CREATE TABLE user (id INT.name VARCHAR(255), address VARCHAR(255))");

/*new Token create for user data
 encode x.y.z   x=header{
  "alg": "HS256",
  "typ": "JWT"
} y=payload_data
{username:dsavindu}
 z=encript type
*/
//bs64 to  value = atob(bs64string)
//const allTokensArray = []
router.post('/signup/create-token', function (req, res, next) {
  const { email, password } = res.body

  userTable
    .findByPk(email)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => console.log(err))

  var userData = req?.body
    ? req.body
    : {
        role: 'admin',
        username: 'savindu',
        password: '12345',
        id: Math.round(Math.random(100000)),
      }
  var expireTimeOneHour = Math.floor(Date.now() / 1000) + 60 * 60
  //allTokensArray.push(userData)
  jwt.sign(
    {
      user: userData,
      exp: expireTimeOneHour,
    },
    'secret',
    (err, token) => {
      if (err) {
        res.json({ error: err })
      } else {
        //save to the database userTable

        res.json({
          token: token,
          exp: expireTimeOneHour,
          expActualDate: new Date(expireTimeOneHour),
        })
      }
    },
  )
})

//http header include token is validation
const verifyTokenFuc = (req, res, next) => {
  console.log('gggg', res.token)
  if (typeof req.headers['authorization'] !== 'undefined') {
    console.log(req.headers)
    var headerToken = req.headers['authorization'].split(' ')[1]
    if (headerToken != null && headerToken != 'undefined') {
      req.token = headerToken
      next()
    } else {
      res.json({ error: 'UnAuthorization Header !' })
    }
  } else {
    res.json({ error: 'UnAuthorization Request !' })
  }
}

//after validation , jwt.verify using decode token inside data and out put
router.post('/signin/verify-token', verifyTokenFuc, function (req, res) {
  const { email, password } = res.body
  console.log('body ', email, password, req.body)
  jwt.verify(req.token, 'secret', (err, getData) => {
    if (err) {
      res.json({ msg: 'Access Denied !', error: err })
    } else {
      //refresh token save to database

      //update the database userTable refreshtoken

      res.json({
        success: true,
        msg: ' Token Verified By JWT .',
        data: getData,
      })
    }
  })
})

module.exports = router
