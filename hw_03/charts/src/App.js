import React, { Component } from 'react';
import LiveData from './LiveData';
import Chart from './Chart';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStocks: [
                {id: 1, name: 'NASDAQ', price: 0, diff: 'equal'},
                {id: 2, name: 'Dimler', price: 0, diff: 'equal'},
                {id: 3, name: 'SpaceX', price: 0, diff: 'equal'}
            ],
            prevStocks: []
        };
    }

    passData(event) {
        console.log(event.target.id);
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
                                    company.diff = 'more';
                                } else if (company.price < old[i].price) {
                                    company.diff = 'less';
                                } else {
                                    company.diff = 'equal';
                                }
                                return company;
                            }
                        );
                        this.setState({ prevStocks: old });
                        this.setState({ currentStocks: updated });
                    });
            },
            1000
        );
    }

    render() {
        return (
            <div className="App">
                <div onClick={this.passData.bind(this)}>
                    <LiveData
                        _id="1"
                        name={this.state.currentStocks[0].name}
                        value={this.state.currentStocks[0].price}
                        diff={this.state.currentStocks[0].diff}
                    />
                    <LiveData
                        _id="2"
                        name={this.state.currentStocks[1].name}
                        value={this.state.currentStocks[1].price}
                        diff={this.state.currentStocks[1].diff}
                    />
                    <LiveData
                        _id="3"
                        name={this.state.currentStocks[2].name}
                        value={this.state.currentStocks[2].price}
                        diff={this.state.currentStocks[2].diff}
                    />
                </div>
                <Chart />
            </div>
        );
    }
}

export default App;
