/**
 * Created by qxue on 3/5/15.
 */
var express = require('express');
var router = express.Router();

var Users = require('../../models/users');

router.get('/', function(req, res) {
    Users.findAll(function (err, users) {
        if(err){
            console.log('get users error');
        }else{
            res.send(users||[]);
        }
    });
});

router.get('/:id',function(req,res){
    var id = req.params.id;
    Users.findById(id,function(err,user){
        if(err){
            console.log('get user error');
        }else{
            res.send(user);
        }
    })
});

module.exports = router;
