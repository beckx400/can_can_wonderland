var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var models = require('../models');
var User = models.User;

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/registerLanding', function(req, res, next){
    res.sendFile(path.join(__dirname, '../views/registerLanding.html'));
});

router.post('/', function(req, res, next){
    User.create(req.body).catch(function(err){
        if(err) {
            console.log(err);
            // res.json error obj
        }}).then(res.redirect('/login')
    );
});

module.exports = router;