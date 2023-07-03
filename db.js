const Sequelize = require('sequelize');

const UserModel = require('./models/user');
const AdminModel = require('./models/admin');

const sequelize = new Sequelize('api_rest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);
const Admin = AdminModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas actualizadas')
    })

module.exports = {
    User,
    Admin
}
