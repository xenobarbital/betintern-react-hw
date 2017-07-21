import React, { Component } from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: ''
        };
    }

    componentWillReceiveProps() {
        this.setState({ price: this.props.price });
        console.log(this.state.price);
    }

    render() {
        return (
            <div className="Details">
                The price is {this.state.price}.
            </div>
        );
    }
}

export default Details;
