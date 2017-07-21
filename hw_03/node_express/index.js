var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/prices', function(req, res) {
    res.send([
        {id: 1, name: 'NASDAQ', price: (Math.random() * 1000).toFixed(2)},
        {id: 2, name: 'Daimler', price: (Math.random() * 1000).toFixed(2)},
        {id: 3, name: 'SpaceX', price: (Math.random() * 1000).toFixed(2)},
        {id: 4, name: 'IBM', price: (Math.random() * 1000).toFixed(2)},
        {id: 5, name: 'Boeing', price: (Math.random() * 1000).toFixed(2)},
        {id: 6, name: 'Intel', price: (Math.random() * 1000).toFixed(2)},
        {id: 7, name: 'ULA', price: (Math.random() * 1000).toFixed(2)}
    ]);
});

app.listen(3070, function() {
    console.log('Example app listening on port 3070')
})
