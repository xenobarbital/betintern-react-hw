import React, { Component } from 'react';
import Chart from './Chart';
import List from './List';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [this.props.stocksData.price] };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.stocksData.price);
        this.setState(
            { data: [...this.state.data, nextProps.stocksData.price] },
            () => console.log(this.state.data)
        );
    }

    render() {
        return (
            <div className="Details">
                <div>
                    Company: {this.props.stocksData.name}<br />
                    <button onClick={this.props.onClick}>Back</button>
                </div>
                <Chart data={this.state.data}/>
                <List data={this.state.data}/>
            </div>
        );
    }
}

export default Details;
