var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../views/home.html'));
});

router.get('/register', function(req,res){
    res.sendFile(path.join(__dirname,'../views/register.html'));
});

router.get('/search', function(req,res){
    res.sendFile(path.join(__dirname,'../views/search.html'));
});

/* Inventory Page */

router.get('/inventory', function(req,res){
    res.sendFile(path.join(__dirname,'../views/inventory.html'));
});

router.get('/about', function(req,res){
    res.sendFile(path.join(__dirname,'../views/about.html'));
});

router.get('/inventory', function(req,res){
    res.sendFile(path.join(__dirname,'../views/inventory.html'));
});

module.exports = router;