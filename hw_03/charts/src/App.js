import React, { Component } from 'react';
import './App.css';
import TilesHolder from './components/TilesHolder';
import Details from './components/Details';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocksData: {},
            viewport: 'tiles',
            companyId: ''
        }
    }

    componentDidMount() {
        setInterval(
            () => {
                fetch('http://localhost:3070/prices')
                    .then(response => response.json())
                    .then(response => {
                        this.setState({
                            stocksData: response
                        });
                    })
            },
            2000
        );
    }

    showDetails(e) {
        if (e.target.id) {
            this.setState({
                viewport: 'details',
                companyId: e.target.id
            }/*, () => {
                console.log(this.state.viewport, this.state.companyId);
                console.log(this.state.stocksData[this.state.companyId]);
            }*/);
        }
    }

    showTiles() {
        this.setState({ viewport: 'tiles' });
    }

    render() {
        if (this.state.viewport === 'tiles'){
            return (
                <div className="App">
                    <TilesHolder
                        onClick={this.showDetails.bind(this)}
                        stocksData={this.state.stocksData}
                    />
                </div>
            );
        } else if (this.state.viewport === 'details') {
            return (
                <div className="App">
                    <Details
                        onClick={this.showTiles.bind(this)}
                        stocksData={this.state.stocksData[this.state.companyId]}
                    />
                </div>
            );
        }
    }
}

export default App;
