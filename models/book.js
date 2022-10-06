module.exports = function(sequelize, Sequelize) {
  var Books = sequelize.define('Books', {
    name: Sequelize.STRING,
    total: Sequelize.INTEGER
  });
  return Books;
}