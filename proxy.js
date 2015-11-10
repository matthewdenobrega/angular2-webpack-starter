"use strict";
var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var app = express();
app.use('/__build__', proxy(url.parse('http://localhost:3000/__build__')));
app.use('/lib', proxy(url.parse('http://localhost:3000/lib')));

app.get('/client', function (req, res) {
  res.sendFile(__dirname + '/src/public/client/index.html');
});
app.get('/client/*', function(req, res) {
  res.sendFile(__dirname + '/src/public/client/index.html');
});

app.get('/cms', function (req, res) {
  res.sendFile(__dirname + '/src/public/cms/index.html');
});
app.get('/cms/*', function (req, res) {
  res.sendFile(__dirname + '/src/public/cms/index.html');
});

app.listen(8080);
