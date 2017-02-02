'use strict';

let requireIndex = require('requireindex');
let resolve = require('path').resolve;

// import all configurations in ../config
module.exports.configs = requireIndex(resolve(__dirname, '../config'));
