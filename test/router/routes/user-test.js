'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

describe('Users', function () {
    before(function () {
        var user = new User({
            name: 'Foo bar'
        });
    });

    describe('GET /users', function () {
        it('should respond', function (done) {
            request
                .get('/users')
                .expect(200)
                .set('Accept', 'application/json')
                .end(done)
        })
    });

    describe('GET /404', function () {
        it('should return 404', function (done) {
            request
                .get('/404')
                .expect(404, done);
        });
    });

});
