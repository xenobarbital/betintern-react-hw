import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prices: []
        };
    }

    componentWillMount() {
        this.setState({ prices: [this.props.price] });
    }

    componentWillReceiveProps() {
        let _prices = this.state.prices;
        _prices[_prices.length] = this.props.price;
        this.setState({ prices: _prices });
        console.log(this.state.prices);
    }

    render() {
        return (
            <div className="Details">
                The price is pwnd.
            </div>
        );
    }
}

export default Details;
