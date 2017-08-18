const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: 'aZxtaIRGKz5J9UQOc1S8cyryu',
    consumer_secret: 'USmIMM0Jl21HaYYp5uU20lSwARykObFw7kXG0ja2k9ckOWbVPx',
    access_token_key: '88262279-1dUFhEiahIOoWKooKwEC9hHIqvITvKbvCl7AgaXff',
    access_token_secret: 'r2jHubSOgDlsIR3CHPBLeiXzBpvSzgZsCWnsQeCX6XmZd'
});

const Server = require('simple-websocket/server');
const server = new Server({ port: 3070 }); // see `ws` docs for other options

let socket;
let stream;

server.on('connection', function (mySocket) {
    //socket.on('data', function (data) {});
    //socket.on('close', function () {});
    //socket.on('error', function (err) {});
    socket = mySocket;
});

//post method

app.post('/', (req, res) => {
    if (req.body.keyword) {
        console.log(req.body.keyword);

        try {
            stream && stream.destroy();
        } catch (e) {
            //log
        }

        //turning on the socket interface
        stream = client.stream('statuses/filter', {
            track: req.body.keyword
        });

        stream.on('data', function(event) {
            socket.send(JSON.stringify(event));
            console.log(event && event.text);
        });

        stream.on('error', function(error) {
            throw error;
        });
        //end of socket stuff
    }

    res.send(req.body.keyword);
});

app.listen(3071, () => console.log('REST on 3071 :\)'));
