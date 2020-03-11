# XML-RPC Parser

[![npm version](https://badge.fury.io/js/xmlrpc-parser.svg)](https://badge.fury.io/js/xmlrpc-parser) [![npm downloads](https://img.shields.io/npm/dt/xmlrpc-parser.svg)](https://www.npmjs.com/package/xmlrpc-parser)
[![License](https://img.shields.io/npm/l/xmlrpc-parser)](LICENSE)

An XML-RPC server middleware for Express running on Node.js
built on [node](http://nodejs.org) for [Express](http://expressjs.com/).

    var express = require('express'),
        xrpc = require('xrpc'),
        app = express();

    app.use(xrpc.xmlRpc);

    app.post('/RPC', xrpc.route({
        echo: function (msg, callback) {
            callback(null, msg);
        }
    }));

    app.listen(3000);

## Installation

    $ npm install xrpc

## Features

- express middleware
- platform-independent xml parser
- includes a router to make using this module dead-simple

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
