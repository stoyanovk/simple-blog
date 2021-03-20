const Sequelize = require('sequelize')

const sequelize = new Sequelize('test-blog', 'admin', '12345678', {
  // gimme postgres, please!
  dialect: 'postgres',
  host: 'localhost'
})

module.exports = sequelize
