var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index');
});

module.exports = router;
