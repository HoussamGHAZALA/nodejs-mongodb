var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express Ok !!!' });
// });

router.get('/cars', function(req, res, next) {
    res.send({marque: "BMW", annee: "2019-01-10", kilometrage: "128500"});
});

router.post('/car', function (req, res, next) {
    console.log(req);
});

module.exports = router;
