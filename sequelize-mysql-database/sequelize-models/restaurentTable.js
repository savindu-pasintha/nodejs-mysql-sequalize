const { DataTypes } = require('sequelize')
const sequelize = require('../sequalizeDatabaseConnection')

const restaurentTable = sequelize.define(
  'restaurentTable',
  {
    restaurent_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    delivery_time: { type: DataTypes.STRING },
    miles_away: { type: DataTypes.STRING },
    open_at: { type: DataTypes.STRING },
    close_at: { type: DataTypes.STRING },
    delivery_fee: { type: DataTypes.DOUBLE },
    minimum_price: { type: DataTypes.DOUBLE },
    image_path: { type: DataTypes.STRING },
    //rating: '4.7 Excelence (500+)',
    //info: [],
    //delivery: [],
  },
  { tableName: 'restaurentTable' },
)
module.exports = restaurentTable
