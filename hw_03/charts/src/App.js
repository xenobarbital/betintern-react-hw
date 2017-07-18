import React, { Component } from 'react';
import LiveData from './LiveData';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStocks: [
                {id: 1, name: 'NASDAQ', price: 0, diff: '='},
                {id: 2, name: 'Dimler', price: 0, diff: '='},
                {id: 3, name: 'SpaceX', price: 0, diff: '='}
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
                        let old = this.state.currentStocks;
                        let updated = response.map(
                            (company, i) => {
                                if (company.price > old[i].price) {
                                    company.diff = '+';
                                } else if (company.price < old[i].price) {
                                    company.diff = '-';
                                } else {
                                    company.diff = '=';
                                }
                                return company;
                            }
                        );
                        this.setState({ prevStocks: old });
                        this.setState({ currentStocks: updated });
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
                    diff={this.state.currentStocks[0].diff}
                />
                <LiveData
                    _id={this.state.currentStocks[1].id}
                    name={this.state.currentStocks[1].name}
                    value={this.state.currentStocks[1].price}
                    diff={this.state.currentStocks[1].diff}
                />
                <LiveData
                    _id={this.state.currentStocks[2].id}
                    name={this.state.currentStocks[2].name}
                    value={this.state.currentStocks[2].price}
                    diff={this.state.currentStocks[2].diff}
                />
            </div>
        );
    }
}

export default App;
