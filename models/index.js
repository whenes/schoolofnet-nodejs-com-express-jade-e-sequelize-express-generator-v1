var path = require('path');
var fs = require('fs');
var Sequelize = require('sequelize');
var conn = new Sequelize('mysql://root:12345678@localhost:3306/express_generator');
var lodash = require('lodash');
var db = {};

fs.readdirSync(__dirname).filter(function(file) {
  return (file !== 'index.js');
}).forEach(function(file, key) {
  var model = require(path.join(__dirname, file))(conn, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(function(model) {
  if (!db[model].hasOwnProperty('associate')) {
    return;
  }
  return db[model].associate(db);
});

module.exports = lodash.extend({ Sequelize: Sequelize, sequelize: conn }, db);