import React, { Component } from 'react';
import './App.css';
import TileHolder from './components/TileHolder';
import Details from './components/Details';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newStockData: [],
            oldStockData: [],
            priceChange: [],
            tileView: true,
            companyId: ''
        }
    }

    // componentWillMount() {
    //     fetch('http://localhost:3070/prices')
    //         .then(response => response.json())
    //         .then(response => {
    //             this.setState({ newStockData: response });
    //             this.setState({
    //                 priceChange: response.map(
    //                     data => 'equal'
    //                 )
    //             })
    //         })
    // }

    componentDidMount() {
        setInterval(
            () => {
                fetch('http://localhost:3070/prices')
                    .then(response => response.json())
                    .then(response => {
                        this.setState({ oldStockData: this.state.newStockData,
                            newStockData: response,
                            priceChange: response.map(
                                (data, i) => {
                                    if (!this.state.oldStockData.length) {
                                        return 'equal';
                                    }
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
                        //this.setState({ newStockData: response });
                        /*   this.setState({
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
                        });*/
                    })
            },
            500
        );
    }

    detailedView(event) {
        this.setState({ companyId: event.target.id });
        this.setState({ tileView: false });
    }

    tileView() {
        this.setState({ tileView: true });
    }

    render() {
        if (this.state.tileView) {
            return (
                <div className="App">
                    <h2>Stocks datafeed:</h2>
                    <TileHolder
                        detailedView={this.detailedView.bind(this)}
                        stockData={this.state.newStockData}
                        priceChange={this.state.priceChange}
                    />
                </div>
            );
        } else {
            let id = this.state.companyId;
            return (
                <div className="App">
                    <h2>Detailed view</h2>
                    <button onClick={this.tileView.bind(this)}>back</button>
                    <Details
                        name={this.state.newStockData[id].name}
                        price={this.state.newStockData[id].price}
                        _id={this.state.newStockData[id].id}
                    />
                </div>
            );
        }
    }
}

export default App;
