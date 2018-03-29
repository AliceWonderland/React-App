'use strict';

// DATABASE ENTRY FILE
// Require all the models
// Running each model (table) module (file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is required everywhere

const User = require('./user');
const Campus = require('./campus');
const Student = require('./student');

// Do Joins/Relationships here
// Order of relationship declaration matters
Student.belongsTo(Campus);
Campus.hasMany(Student);


module.exports = { User, Campus, Student };

