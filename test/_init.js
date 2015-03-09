/**
 * Created by qxue on 3/9/15.
 */
process.env.NODE_ENV = 'test';

var app = require('../app');
var chai = require('chai');
var request = require('supertest');

global.should = chai.should();
global.request = request(app);
