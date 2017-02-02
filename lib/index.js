'use strict';

let requireIndex = require('requireindex');
let { resolve } = require('path');

// import all configurations in ../config
module.exports.configs = requireIndex(resolve(__dirname, '../config'));
