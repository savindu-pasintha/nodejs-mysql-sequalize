const { DataTypes } = require('sequelize')
const sequelize = require('../sequalizeDatabaseConnection')

const categoryTable = sequelize.define(
  'categoryTable',
  {
    category_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: { type: DataTypes.STRING },
  },
  { tableName: 'categoryTable' },
)

module.exports = categoryTable
