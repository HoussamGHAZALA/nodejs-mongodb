const express = require('express');
const router = express.Router();

router.get('/cars', function(req, res, next) {
    res.send({marque: "BMW", annee: "2019-01-10", kilometrage: "128500"});
});

router.post('/car', function (req, res, next) {
    console.log(req.body);
    res.end();
});

module.exports = router;
