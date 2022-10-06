module.exports = function(sequelize, Sequelize) {
  var Authors = sequelize.define('Authors', {
    name: Sequelize.STRING
  }, {
    classMethods: function(models) {
      Authors.hasMany(models.Books);
    }
  }
  );
  return Authors;
}