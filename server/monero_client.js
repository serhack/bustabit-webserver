var bitcoin = require('bitcoin');
var fs = require('fs');
var path = require('path');
var config = require('../config/config');

var client = new bitcoin.Client({
    host: config.MONERO_HOST,
    port: config.MONERO_PORT,
    user: config.MONERO_USER,
    pass: config.MONERO_PASS
});

module.exports = client;
