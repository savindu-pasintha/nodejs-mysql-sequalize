const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || '',
  process.env.DATABASE_USER_NAME || '',
  process.env.DATABASE_PASSWORD || '',
  {
    host: process.env.DATABASE_HOST || '',
    port: process.env.DATABASE_PORT || '',
    dialect: process.env.DATABASE_TYPE || '',
  },
)

module.exports = sequelize
///* one of  | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */

