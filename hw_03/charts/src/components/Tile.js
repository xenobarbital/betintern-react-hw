import React, { Component } from 'react';

class Tile extends Component {
    render() {
        return (
            <div
                className="Tile"
                id={this.props._id}
            >
                Datafeed from: {this.props.name}<br />
                Stocks price value: {this.props.price}
                <div className={this.props.priceChange}></div>
            </div>
        );
    }
}

export default Tile;
