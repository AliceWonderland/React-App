'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('user',
  {
    userName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    firstName:{
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName:{
      type: Sequelize.STRING,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false,
      validate:{isEmail:true}
    },
    image:{
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
