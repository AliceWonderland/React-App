'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('campus',
  {
    name:{
      type: Sequelize.STRING,
      allowNull: false
    },
    image:{
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'https://unsplash.it/g/252/200/?random'
    }
  },
  {
    timestamps: false
  }
);
