const Sequelize = require('sequelize')
const sequelize = require('./index')

Comment.init(
  {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: Sequelize.TEXT
    }
  },
  { sequelize, modelName: 'comment' }
)


module.exports = Product
