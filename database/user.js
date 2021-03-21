const Sequelize = require('sequelize')
const Image = require('./image')
const Post = require('./product')
const Token = require('./token')
const Comment = require('./comment')
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

User.hasOne(Image, { foreignKey: 'userId', onDelete: 'cascade' })
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'cascade' })
User.hasMany(Token, { foreignKey: 'userId', onDelete: 'cascade' })
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'cascade' })


module.exports = User
