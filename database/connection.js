const sequelize = require('sequelize')
const dbConfig = require('./config')
const User = require('../models/User')



const conn = new sequelize.Sequelize(dbConfig);

//Models
User.init(conn);


module.exports = conn;

