import React, { Component } from 'react';

class Tweet extends Component {
    render() {
        return (
            <div className='Tweet'>
                <h3>{this.props.user}</h3>
                <img src={this.props.image} alt='upic'/>
                <p>{this.props.text}</p>
                <footer>{this.props.time}</footer>
            </div>
        );
    }
}

export default Tweet;
