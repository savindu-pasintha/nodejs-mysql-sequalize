const { DataTypes } = require('sequelize')
const sequelize = require('../sequalizeDatabaseConnection')

//dish -> category , menu -> dish
const dishTable = sequelize.define(
  'dishTable',
  {
    dish_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: { type: DataTypes.BIGINT },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price_after_discount: { type: DataTypes.DOUBLE },
    price_before_discount: { type: DataTypes.DOUBLE },
  },

  { tableName: 'dishTable' },
)

module.exports = dishTable
