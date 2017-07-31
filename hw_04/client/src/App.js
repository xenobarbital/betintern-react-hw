import React, { Component } from 'react';
import Websocket from 'react-websocket';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
    }
    /*componentDidMount() {
        //const socket = io('ws://localhost:3070');
        //socket.on('message', message => {
        //    console.log(JSON.stringify(message));
        //})
        const socket = io.connect('localhost:3070');
        socket.on('message', msg => console.log(msg));
    }*/

    handleData(data) {
        let response = JSON.parse(data);
        let tweet = {
            user: response.user.name,
            image: response.user.profile_image_url,
            time: response.created_at,
            text: response.text,
            screenName: response.user.screen_name
        }
        this.setState({ feed: [tweet, ...this.state.feed] });
        console.log(response);
    }

    render() {
        let tweets = this.state.feed.map(
            (elem, i) => {
                return (
                    <div
                        className="tweet"
                        key={i}
                    >
                        <a
                            href='https://twitter.com/'
                            target='_blank'
                        >
                            <img src={elem.image} alt='userpic'/>
                        </a>
                        <h3>{elem.user}</h3>
                        <p>{elem.text}</p>
                        <footer>{elem.time}</footer>
                    </div>
                );
            }
        );
        return (
            <div className="App">
                Hello sockets
                <Websocket
                    url='ws://localhost:3070'
                    onMessage={this.handleData.bind(this)}
                />
                {tweets}
            </div>
        );
    }
}

export default App;
