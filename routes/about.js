var express = require('express');
var router = express.Router();

router.get('/about',function(req,res,next){
    res.send('CMPE 280 - Prof. Ron Mak - Assignment - 1');
});

module.exports = router;
