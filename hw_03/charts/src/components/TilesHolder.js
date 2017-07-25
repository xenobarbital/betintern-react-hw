import React, { Component } from 'react';
import Tile from './Tile';

class TilesHolder extends Component {
    render() {
        let tiles = Array.from(this.props.stocksData).map(
            data => {
                return (
                    <Tile
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        price={data.price}
                    />
                );
            }
        );

        return (
            <div
                className="TilesHolder"
                onClick={this.props.onClick}
            >
                {tiles}
            </div>
        );
    }
}

export default TilesHolder;
