const { DataTypes } = require('sequelize')
const sequelize = require('../sequalizeDatabaseConnection')

//rating -> restaurent
const ratingTable = sequelize.define(
  'ratingTable',
  {
    rating_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurent_id: { type: DataTypes.BIGINT }, //foriegnkey
    rate: { type: DataTypes.DOUBLE },
    review_count: { type: DataTypes.BIGINT },
    description: { type: DataTypes.STRING },
  },
  { tableName: 'ratingTable' },
)

module.exports = ratingTable
