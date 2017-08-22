import React, { Component } from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.data) {
            this.setState({ feed: [newProps.data, ...this.state.feed] });
        }
    }

    render() {
        console.log(JSON.stringify(this.state.feed));
        return (
            <div className='Container'>
                <h2>Tracking: {this.props.keyword}</h2>
            </div>
        );
    }
}

export default Container;
