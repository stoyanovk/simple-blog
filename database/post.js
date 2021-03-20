const Sequelize = require('sequelize')
const sequelize = require('./index')
const Comment  = require('./comment')

class Post extends Sequelize.Model {}

Post.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    }
  },
  { sequelize, modelName: 'post' }
)

Post.hasMany(Image, { foreignKey: 'userId', onDelete: 'cascade' })
Post.hasMany(Comment, { foreignKey: 'userId', onDelete: 'cascade' })

module.exports = Product
