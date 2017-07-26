import React, { Component } from 'react';

class List extends Component {
    render() {
        let list = this.props.data./*reverse().*/map(
            (elem, i) => {
                return (
                    <li key={i}>{elem}</li>
                );
            }
        ).reverse();
        return (
            <div className="List">
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default List;
