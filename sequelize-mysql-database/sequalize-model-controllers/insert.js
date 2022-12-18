const dishTable = require('../sequelize-models/dishTable')
const categoryTable = require('../sequelize-models/categoryTable')
const menuTable = require('../sequelize-models/menuTable')
const restaurentTable = require('../sequelize-models/restaurentTable')
const ratingTable = require('../sequelize-models/ratingTable')
const userTable = require('../sequelize-models/userTable')

export const insertRating = (data_obj) => {
  const data = {
    restaurent_id: 1,
    rate: 4.5,
    review_count: 500,
    description: 'Excent',
  }
}
export const insertCategory = (data_obj) => {
  const data = { category_name: 'Hot Power Bowls' }
}
export const insertRestaurent = (data_obj) => {
  const data = {
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
  }
}
export const insertUser = (data_obj) => {}
export const insertdish = (data_obj) => {}
export const insertMenu = (data_obj) => {}
