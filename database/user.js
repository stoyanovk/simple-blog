const Sequelize = require('sequelize')
const Image = require('./image')
const Product = require('./product')
const Token = require('./token')
const sequelize = require('./index')
class User extends Sequelize.Model {
}

User.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  },
  { sequelize, modelName: 'user' }
)

User.hasMany(Image, { foreignKey: 'userId', onDelete: 'cascade' })
User.hasMany(Product, { foreignKey: 'userId', onDelete: 'cascade' })
User.hasMany(Token, { foreignKey: 'userId', onDelete: 'cascade' })


module.exports = User
