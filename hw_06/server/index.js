const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Twitter = require('twitter');
const client = new Twitter({
    consumer_key: 'BSvYeUXvnvDHtVPrYOc65agGj',
    consumer_secret: 'WngRCFFYUuVaFyWDe7xfvKdWiUMtPJQePu41iqjAQoiTh8rkgD',
    access_token_key: '890157332465844224-BEjodQlLUxICjySSEHoZxPibORoMhjt',
    access_token_secret: 'jo249AD4c0io0n6d45s0AxntAleiHqm75doWfMzj9XTTp'
});

const Server = require('simple-websocket/server');
const server = new Server({ port: 3070 }); // see `ws` docs for other options

let socket;

server.on('connection', s => {
    socket = s;
    s.on('close', () => socket = null);
});

let stream;

app.post('/', (req, res) => {
    try {
        stream && stream.destroy();
    } catch (e) {
        throw e;
    }

    if (req.body.keyword) {
        stream = client.stream('statuses/filter', {
            track: req.body.keyword
        });

        stream.on('data', event => {
            socket && socket.send(JSON.stringify({
                user: event.user.name,
                image: event.user.profile_image_url,
                time: event.created_at,
                text: event.text,
                screenName: event.user.screen_name
            }));
        });

        stream.on('error', error => {
            console.log(error);
        })
    }

    res.send(req.body.keyword);
});

app.listen(3071, () => console.log('Server at port 3071 :\)'));