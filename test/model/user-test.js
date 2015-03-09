'use strict';

var User = require('../../model/user');
var user;

describe('User attributes',function(){
    before(function(){
        user = new User({
            name: '测试'
        });
    });

    it('name should be a string',function(){
        user.name.should.be.a('string');
    });

});
