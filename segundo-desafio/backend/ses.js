'use-strict';

var aws = require('aws-sdk');

var ses = new aws.SES({region: 'us-east-1'});

module.exports = ses