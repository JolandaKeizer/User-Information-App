var pug = require('pug');
var express = require('express');
var fs = require('fs');
var jquery = require('require');


app.get('/', (req, res) => { // handle new user form page 
    res.response('Hello world')
});

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
})