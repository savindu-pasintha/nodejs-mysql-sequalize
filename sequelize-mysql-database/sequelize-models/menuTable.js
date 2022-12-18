const { DataTypes } = require('sequelize')
const sequelize = require('../sequalizeDatabaseConnection')

//one to many - dish -> menu
const menuTable = sequelize.define(
  'menuTable',
  {
    menu_id: { type: DataTypes.BIGINT },
    dish_ids: { type: DataTypes.STRING }, //forignkeys
    description: { type: DataTypes.TEXT },
    price_after_discount: { type: DataTypes.DOUBLE },
    price_before_discount: { type: DataTypes.DOUBLE },
  },
  { tableName: 'menuTable' },
)

module.exports = menuTable
