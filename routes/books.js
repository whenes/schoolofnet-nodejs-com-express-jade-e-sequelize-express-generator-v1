var express = require('express');
var router = express.Router();
var db = require('./../models');

router.get('/', function(req, res) {
  db.Books.findAll().then(function(result) {
    res.render('books', { books: result });
  }).catch(function(err) { console.log(err) });
});

router.get('/sum', function(req, res) {
  db.Books.sum('total').then(function(result) { console.log(result) });
});
router.get('/min', function(req, res) {
  db.Books.min('total').then(function(result) { console.log(result) });
});
router.get('/max', function(req, res) {
  db.Books.max('total').then(function(result) { console.log(result) });
});
router.get('/count', function(req, res) {
  db.Books.count().then(function(result) { console.log(result) });
});
router.get('/countAll', function(req, res) {
  db.Books.findAndCountAll({
    where: {
      name: 'Teste um'
    }
  }).then(function(result) { console.log(result) });
});

router.get('/create', function(req, res) {
  res.render('new_books');
});
router.post('/', function(req, res) {
  // db.Books.findOrCreate({
  //   where: {
  //     name: req.body.name
  //   },
  //   defaults: req.body
  // });
  db.Books.create(req.body).then(function(result) {
    res.redirect('/books');
  }).catch(function(err) { console.log(err) });
})

module.exports = router;