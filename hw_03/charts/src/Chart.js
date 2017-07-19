import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

/*const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [{
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
        data: [10, 15, 20, 23, 19],
    }]
};
*/
class Chart extends Component {
    render() {
        return (
            <div>
                <Bar
                    data={this.props.data}
                    width={200}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
};

export default Chart;
