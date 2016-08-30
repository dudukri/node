/**
 * Created by JK on 2016-08-30.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
// "URL - index로 접속했을 시,"
router.get('/index', function(req, res, next) {
    res.render('dudukri_company/main', { title: 'Express' });
});

module.exports = router;
