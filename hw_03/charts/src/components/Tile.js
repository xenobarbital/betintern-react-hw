import React, { Component } from 'react';

class Tile extends Component {
    render() {
        return (
            <div
                className="Tile"
                id={this.props._id}
            >
                <p>Datafeed from: <strong>{this.props.name}</strong></p>
                <p>Stocks price value: <strong>{this.props.price}</strong></p>
                <div className={this.props.priceChange}></div>
            </div>
        );
    }
}

export default Tile;
