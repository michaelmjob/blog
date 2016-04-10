'use strict';

var express = require('express');
var router = express.Router();

var user;

/* GET home page. */
router.get('/', checkLogin);
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

router.get('/login', checkNotLogin);
router.get('/login', function(req, res) {
    res.render('login', {title: '请登录'});
});

router.post('/login', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username == 'qwe' && password == '123') {
        req.session.login = true;
        res.redirect('/');
    } else {
        res.render('login', {message: '用户名或密码错误!'});
    }
});

router.get('/list', function(req, res) {
    res.render('list', {total: 5, rows: [{
        id: 1,
        title: 'wget的基本用法',
        createTime: '2016-04-08 12:12:12',
        content: 'wget的基本用法wget的基本用法wget的基本用法wget的基本用法wget的基本用法wget的基本用法'
    }, {
        id: 2,
        title: 'wget的基本用法',
        createTime: '2016-04-08 12:12:12',
        content: 'wget的基本用法wget的基本用法wget的基本用法wget的基本用法wget的基本用法wget的基本用法'
    }, {
        id: 3,
        title: 'wget的基本用法',
        createTime: '2016-04-08 12:12:12',
        content: 'wget的基本用法wget的基本用法wget的基本用法wget的基本用法wget的基本用法wget的基本用法'
    }]})
});

function checkLogin(req, res, next) {
    if (req.session.login) {
        console.log('已登录...');
        next();
    } else {
        return res.redirect('login');
    }
}

function checkNotLogin(req, res, next) {
    if (!req.session.login) {
        console.log('未登录...');
        next();
    } else {
        return res.redirect('/');
    }
}

module.exports = router;
