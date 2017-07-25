import React, { Component } from 'react';
import Chart from './Chart';
import List from './List';

class Details extends Component {
    render() {
        return (
            <div className="Details">
                <div>
                    id: {this.props.stocksData.id}<br />
                    name: {this.props.stocksData.name}<br />
                    price: {this.props.stocksData.price}<br />
                    <button onClick={this.props.onClick}>Push me!</button>
                </div>
                <Chart /><List />
            </div>
        );
    }
}

export default Details;
