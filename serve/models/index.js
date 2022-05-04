const {Sequelize,DataTypes} = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const User = require('./user')(sequelize,DataTypes)
const Comment = require('./comment')(sequelize,DataTypes)

User.hasMany(Comment)
Comment.belongsTo(User)

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User
db.Comment = Comment



module.exports = db;
