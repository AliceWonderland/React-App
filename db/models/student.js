'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('student',
  {
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
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'https://unsplash.it/g/200/200/?random'
    },
    campusId:{
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

// IGNORE BELOW
// INSERT INTO students VALUES (DEFAULT,'Alice','Chuang','alice@email.com','https://www.fillmurray.com/100/100',1),
//     (DEFAULT,'Erica','Chuang','erica@email.com','https://www.fillmurray.com/100/100',1),
//     (DEFAULT,'Monroe','Chuang','monroe@email.com','https://www.fillmurray.com/100/100',1),
//     (DEFAULT,'Bill','Murray','bill@email.com','https://www.fillmurray.com/100/100',1),
//     (DEFAULT,'Justin','Bieber','justin@email.com','https://www.fillmurray.com/100/100',1),
//     (DEFAULT,'Blah','Lastname','blah@email.com','https://www.fillmurray.com/100/100',1);

// INSERT INTO campuses VALUES
// (DEFAULT,'Terra', 'https://www.fillmurray.com/200/200'),
// (DEFAULT,'Titan', 'https://www.fillmurray.com/200/200'),
// (DEFAULT,'Moon1', 'https://www.fillmurray.com/200/200'),
// (DEFAULT,'Saturn', 'https://www.fillmurray.com/200/200'),
// (DEFAULT,'Blue Dward', 'https://www.fillmurray.com/200/200');