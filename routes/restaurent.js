var express = require('express')
const puppeter = require('puppeteer')
var router = express.Router()

const dishTable = require('../sequelize-mysql-database/sequelize-models/dishTable')
const categoryTable = require('../sequelize-mysql-database/sequelize-models/categoryTable')
const menuTable = require('../sequelize-mysql-database/sequelize-models/menuTable')
const restaurentTable = require('../sequelize-mysql-database/sequelize-models/restaurentTable')
const ratingTable = require('../sequelize-mysql-database/sequelize-models/ratingTable')
const userTable = require('../sequelize-mysql-database/sequelize-models/userTable')

//
router.get('/dishes', function (req, res, next) {
  
  res.status(200).send({
    data: [
      {
        id: 23,
        categoryName: 'Pizza',
        dishes: [
          {
            id: 34,
            dishName: 'Vegetable Pizza',
            ratings: [
              {
                id: 12,
                rating: 4,
                comment: 'Good and Yummy Pizza. Recommended!',
              },
              {
                id: 45,
                rating: 2,
                comment: 'Bad customer experience',
              },
            ],
          },
        ],
      },
      {
        id: 28,
        categoryName: 'Burgers',
        dishes: [
          {
            id: 12,
            dishName: 'Chicken Ham Burger',
            ratings: [
              {
                id: 90,
                rating: 5,
                comment: 'Very cheap and tasty.',
              },
            ],
          },
        ],
      },
    ],
  })
})

router.get('/insert', async function (req, res, next) {
  for (let i = 1; i < 10; i++) {
    await restaurentTable
      .create({
        name: "Tossed - St Martin's Lane",
        description: 'Chicken·Salads·Healthy',
        delivery_time: '10 - 15 min',
        miles_away: '0.20 miles',
        open_at: 'Opens at 11:00 on Monday',
        close_at: '',
        delivery_fee: 1.99,
        minimum_price: 7.0,
        image_path:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQ5XbDNS6L-oSb3iwYtwHov82At3P1a1vzX5i3841dNiOxbAxrMq7k6Gc99CThMJLDC4&usqp=CAU',
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    await ratingTable
      .create({
        restaurent_id: i,
        rate: 4.5,
        review_count: 500,
        description: 'Excent',
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    await categoryTable
      .create({ category_name: 'Hot Power Bowls' })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    await dishTable
      .create({
        category_id: i,
        title: 'Mighty Mexican',
        description: `Our best seller! All the best bits of Mexico - in one bowl:
    your choice of hot protein served on our famous Low GI supergrains with chunky smashed avocado, house-made spicy beans, crunchy torilla chips and finished with a sprinkling of mature cheddar`,
        image_path:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FRp_nTA6iE65LWZBjoGgX9jLQbKdL-puDw&usqp=CAU',
        price_after_discount: 8.33,
        price_before_discount: 11.99,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    await menuTable
      .create({
        menu_id: 1,
        dish_ids: '1',
        description:
          'Menu Discription Our best seller! All the best bits of Mexico - in one bowl:',
        price_after_discount: 40.25,
        price_before_discount: 100.99,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))

    await userTable
      .create({
        email: 'abc@gmail.com',
        password: '1235678',
        refresh_token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWlhbCI6ImFiY0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1Njc4Iiwicm9sZSI6ImFkbWluIiwibmFtZSI6ImFiYyJ9.tTZ9ajJ9cFTF78NVM7-717DaC7dBb-MMh8JTSZqAQTk`,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }
  res.status(200).send({ msg: 'insert data to the database' })
})

module.exports = router
