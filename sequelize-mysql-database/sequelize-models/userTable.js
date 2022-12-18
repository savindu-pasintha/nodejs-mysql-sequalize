const { DataTypes } = require('sequelize')
const sequelize = require('../sequalizeDatabaseConnection')

const userTable = sequelize.define(
  'userTable',
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  { tableName: 'userTable' },
)

module.exports = userTable
