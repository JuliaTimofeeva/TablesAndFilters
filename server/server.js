var express = require('express');
var http = require('http');
var static = require('node-static');
var app = express();
const cors = require('cors')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(8080);
app.get('/people', function (req, res) {
  res.send([
    {number: 1, name: 'Christopher', surname: 'Price', age: 22},
    {number: 2, name: 'Ernest', surname: 'Hood', age: 15},
    {number: 3, name: 'Godwin', surname: 'Harrison', age: 36},
    {number: 4, name: 'Robert', surname: 'Phillips', age: 41},
    {number: 5, name: 'Frank', surname: 'Osborne', age: 18},
    {number: 6, name: 'Peter', surname: 'Greene', age: 24},
    {number: 7, name: 'Brett', surname: 'Warren', age: 26},
    {number: 8, name: 'John', surname: 'Wheeler', age: 26},
    {number: 9, name: 'Morgan', surname: 'Willis', age: 42},
    {number: 10, name: 'Nancy', surname: 'Kelly', age: 14}
  ]);
});

app.get('/price', function (req, res) {
  res.send([
    {number: 1, model: 'Vertex', price: 22000},
    {number: 2, model: 'Nokia', price: 13200},
    {number: 3, model: 'Philips', price: 5000},
    {number: 4, model: 'BQ', price: 1400},
    {number: 5, model: 'Alcatel', price: 6999},
    {number: 6, model: 'Micromax', price: 14999},
    {number: 7, model: 'Fly', price: 20000},
    {number: 8, model: 'ZTE', price: 22000},
    {number: 9, model: 'LG', price: 13200},
    {number: 10, model: 'Samsung', price: 14999}
  ]);
});

console.log('Server running on port 8080');
