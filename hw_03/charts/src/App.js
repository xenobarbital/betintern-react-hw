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
            prevStocks: [],
            firstChart: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            secondChart: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            thirdChart: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        this.props.data = {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [{
                backgroundColor: 'grey',
                borderColor: 'black',
                borderWidth: 1,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            }]
        };
    }

    shiftCharData(data, price) {
        data.push(price);
        data.shift();
        return data;
    }

    passData(event) {
        console.log(event.target.id);
        if (event.target.id === '1') {
            this.props.data.datasets[0].data = this.state.firstChart;
        } else if (event.target.id === '2') {
            this.props.data.datasets[0].data = this.state.secondChart;
        } else if (event.target.id === '3') {
            this.props.data.datasets[0].data = this.state.thirdChart;
        }
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
                        let arr1 = this.state.firstChart;
                        let arr2 = this.state.secondChart;
                        let arr3 = this.state.thirdChart;
                        this.setState({
                            firstChart: this.shiftCharData(arr1, response[0].price)
                        });
                        this.setState({
                            secondChart: this.shiftCharData(arr2, response[1].price)
                        });
                        this.setState({
                            thirdChart: this.shiftCharData(arr3, response[2].price)
                        });

                        console.log(this.state.firstChart);
                        console.log(this.state.secondChart);
                        console.log(this.state.thirdChart);

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
                <Chart data={this.props.data}/>
            </div>
        );
    }
}

export default App;
