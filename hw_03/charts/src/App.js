import React, { Component } from 'react';
import './App.css';
import TileHolder from './components/TileHolder';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStockData: [],
            oldStockData: [],
            priceChange: []
        }
    }

    componentWillMount() {
        fetch('http://localhost:3070/prices')
            .then(response => response.json())
            .then(response => {
                this.setState({ newStockData: response });
                this.setState({
                    priceChange: response.map(
                        data => 'equal'
                    )
                })
            })
    }

    componentDidMount() {
        setInterval(
            () => {
                fetch('http://localhost:3070/prices')
                    .then(response => response.json())
                    .then(response => {
                        this.setState({ oldStockData: this.state.newStockData });
                        this.setState({ newStockData: response });
                        this.setState({
                            priceChange: response.map(
                                (data, i) => {
                                    if (data.price > this.state.oldStockData[i].price) {
                                        return 'more';
                                    } else if (data.price < this.state.oldStockData[i].price) {
                                        return 'less';
                                    } else {
                                        return 'equal';
                                    }
                                }
                            )
                        });
                    })
            },
            2000
        );
    }

    render() {
        return (
            <div className="App">
                <h2>Stocks datafeed:</h2>
                <TileHolder
                    stockData={this.state.newStockData}
                    priceChange={this.state.priceChange}
                />
            </div>
        );
    }
}

export default App;
