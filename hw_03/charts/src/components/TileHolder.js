import React, { Component } from 'react';
import Tile from './Tile';

class TileHolder extends Component {
    render() {
        let tiles = this.props.stockData.map(
            (data, i) => {
                return (
                    <Tile
                        _id={data.id}
                        name={data.name}
                        price={data.price}
                        priceChange={this.props.priceChange[i]}
                        key={data.id}
                    />
                );
            }
        );
        return (
            <div className="TileHolder">
                {tiles}
            </div>
        );
    }
}

export default TileHolder;
