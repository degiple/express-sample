var express = require('express');
var router = express.Router();
var moment = require('moment');

/* mysql Config */
var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT *, DATE_FORMAT(created_at, \'%Y年%m月%d日 %k時%i分%s秒\') AS created_at FROM boards';
  connection.query(query, function(err, rows) {
    res.render('index', {
      title: '２回目のNode.js',
      boardList: rows
    });
  });
});

/* from Respons */
router.post('/', function(req, res, next) {
  var inputs = req.body.inputs;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss'); // 追加

  // コンソール出力
  console.log(inputs);
  console.log(createdAt);
  
  // DB書込
  var query = 'INSERT INTO boards (title, created_at) VALUES ("' + inputs + '", ' + '"' + createdAt + '")';
  connection.query(query, function(err, rows) {
    res.redirect('/');
  });
  
});

module.exports = router;
