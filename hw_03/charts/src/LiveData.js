import React, { Component } from 'react';

class LiveData extends Component {
    render() {
        return (
            <div className="LiveData" id={this.props._id}>
                <p>Feed from {this.props.name}</p>
                <p>Stocks value: {this.props.value}</p>
                <div className={this.props.diff}></div>
            </div>
        );
    }
}

export default LiveData;
