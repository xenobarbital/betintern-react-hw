var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/prices', function(req, res) {
    res.send([
        {id: 1, name: 'NASDAQ', price: (Math.random() * 1000).toFixed(2)},
        {id: 2, name: 'Dimler', price: (Math.random() * 1000).toFixed(2)},
        {id: 3, name: 'SpaceX', price: (Math.random() * 1000).toFixed(2)}
    ]);
});

app.listen(3070, function() {
    console.log('Example app listening on port 3070')
})
