import React, { Component } from 'react';
import Websocket from 'react-websocket';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            connected: false,
            keyword: ''
        };
    }

    updKeyword(e) {
        this.setState({ keyword: e.target.value });
    }

    handshake() {
        console.log(this.state.keyword);
        const URL = 'http://localhost:3071';
        const MY_HEADERS = new Headers({
            'Content-Type': 'application/json'
        });
        const req = {
            keyword: this.state.keyword
        }
        fetch(URL, {
            method: 'post',
            headers: MY_HEADERS,
            body: JSON.stringify(req)
        }).then(response => console.log(response));
    }

    dataUpdate(data) {
        let response = JSON.parse(data);
        let tweet = {
            user: response.user.name,
            image: response.user.profile_image_url,
            time: response.created_at,
            text: response.text,
            screenName: response.user.screen_name
        }
        this.setState({ data: tweet });
        console.log('from App component', JSON.stringify(tweet));
    }

    render() {
        const myForm = (
            <div>
                <input
                    type='text'
                    onChange={this.updKeyword.bind(this)}
                />
                <button
                    onClick={this.handshake.bind(this)}
                >
                    Submit
                </button>
            </div>
        );

        if (!this.state.connected) {
            return (
                <div className='App'>
                    <p>No connection</p>
                    {myForm}
                </div>
            );
        } else {
            return (
                <div className='App'>
                    <p>Connected. Tracking {this.state.keyword}</p>
                    {myForm}
                    <Websocket
                        url='ws://localhost:3070'
                        onMessage={this.dataUpdate.bind(this)}
                    />
                </div>
            );
        }
    }
}

export default App;
