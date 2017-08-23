import React, { Component } from 'react';
import Websocket from 'react-websocket';
import './App.css';
import Container from './components/Container';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
            keyword: '',
            data: null
        }
    }

    setConnection() {
        console.log(this.state.keyword);
        const URL = 'http://localhost:3071';
        const HEADERS = new Headers({
            'Content-Type': 'application/json'
        });
        let request = JSON.stringify({
            keyword: this.state.keyword
        });

        fetch(URL, {
            method: 'post',
            headers: HEADERS,
            body: request
        }).then(response => {
            //console.log(response);
            this.setState({ connected: true });
        })
    }

    killConnection() {
        this.setState({
            connected: false
        })
    }

    dataUpdate(newData) {
        this.setState({ data: JSON.parse(newData) });
        console.log(typeof this.state.data);
    }

    render() {
        let connection;
        if (!this.state.connected) {
            connection = <div><h1>No connection</h1></div>;
        } else {
            connection = (
                <div>
                    <h1>Connected</h1>
                    <Websocket
                        url='ws://localhost:3070'
                        onMessage={this.dataUpdate.bind(this)}
                    />
                </div>
            )
        }

        return (
            <div className='App'>
                {connection}
                <input
                    type='text'
                    placeholder='input keyword'
                    onChange={(e) => this.setState({
                        keyword: e.target.value
                    })}
                />
                <button
                    onClick={this.setConnection.bind(this)}
                >
                    Start
                </button>
                <button
                    onClick={this.killConnection.bind(this)}
                >
                    Stop
                </button>
                <Container
                    keyword={this.state.keyword}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default App;
