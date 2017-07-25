import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceLog: []
        };
    }

    componentWillReceiveProps() {
        this.setState({
            priceLog: [...this.state.priceLog, this.props.price]
        });
    }

    render() {
        let arrow;
        let priceLog = this.state.priceLog;
        let length = this.state.priceLog.length;

        if (length < 2 || priceLog[length - 1] === priceLog[length - 2]) {
            arrow = 'equal';
        } else if (priceLog[length - 1] > priceLog[length - 2]) {
            arrow = 'more';
        } else {
            arrow = 'less';
        }

        return (
            <div className="Tile">
                Company: {this.props.name}<br/>
                Price: {this.props.price}
                <div className={arrow}></div>
                <button id={this.props.id}>Details</button>
            </div>
        );
    }
}

export default Tile;
