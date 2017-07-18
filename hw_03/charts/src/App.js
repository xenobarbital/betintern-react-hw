import React, { Component } from 'react';
import LiveData from './LiveData';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStocks: [
                {id: 1, name: 'NASDAQ', price: 0},
                {id: 2, name: 'Dimler', price: 0},
                {id: 3, name: 'SpaceX', price: 0}
            ],
            prevStocks: []
        };
    }

    componentDidMount() {
        setInterval(
            () => {
                fetch('http://localhost:3070/prices')
                    .then(response => response.json())
                    .then(response => {
                        let current = this.state.currentStocks;
                        this.setState({ prevStocks: current });
                        this.setState({ currentStocks: response });
                    });
            },
            5000
        );
    }

    render() {
        return (
            <div className="App">
                <LiveData
                    _id={this.state.currentStocks[0].id}
                    name={this.state.currentStocks[0].name}
                    value={this.state.currentStocks[0].price}
                />
                <LiveData
                    _id={this.state.currentStocks[1].id}
                    name={this.state.currentStocks[1].name}
                    value={this.state.currentStocks[1].price}
                />
                <LiveData
                    _id={this.state.currentStocks[2].id}
                    name={this.state.currentStocks[2].name}
                    value={this.state.currentStocks[2].price}
                />
            </div>
        );
    }
}

export default App;
