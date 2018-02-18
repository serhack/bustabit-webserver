var moneroWallet = require('monero-nodejs');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');

var host = config.MONERO_HOST;
var port = config.MONERO_PORT;

var client = new moneroWallet(
    host, port
);

module.exports = client;
