const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
   const Breakfast = sequelize.define('breakfast', {
       name: {
           type: Sequelize.STRING,
       },
       address: {
           type: Sequelize.STRING,
       },
       city: {
           type: Sequelize.STRING,
       },
       state: {
           type: Sequelize.STRING,
       },
       image: {
           type: Sequelize.STRING,
           allowNull: true
       },
       desc: {
           type: Sequelize.TEXT,
       },
   })

   return Breakfast;
}