import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
    render() {
        //console.log(this.props.data);
        let data = {
            labels: ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
            datasets: [{
                data: this.props.data.slice(-10)
            }]
        }

        return (
            <div className="Chart">
                I'm a chart
                <Line
                    data={data}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        );
    }
}

export default Chart;
