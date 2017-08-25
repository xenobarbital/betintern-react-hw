import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });
    }
    render() {
        let data = {
            labels: ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
            datasets: [{
                data: this.state.data.slice(-10)
            }]
        }
        return (
            <div className='Charts'>
                <Line
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        elements: {
                            line: {
                                tension: 0
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

export default Charts;
