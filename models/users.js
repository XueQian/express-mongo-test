/**
 * Created by qxue on 3/5/15.
 */
var mongoose = require('mongoose');
//var model = mongoose.model;

var UserSchema = require('../schemas/users');

//var User = model('User',UserSchema);

module.exports = mongoose.model('User', UserSchema);

//module.exports = User;

