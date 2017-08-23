import React, { Component } from 'react';
import Tweet from './Tweet';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'feed',
            feed: []
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.data) {
            this.setState({ feed: [...this.state.feed, newProps.data] });
        }
    }

    render() {
        let tweets;
        if (this.state.feed.length) {
            tweets = this.state.feed.map(
                (elem, i) => {
                    return (
                        <Tweet
                            key={i}
                            user={elem.user}
                            image={elem.image}
                            time={elem.time}
                            text={elem.text}
                            screenName={elem.screenName}
                        />
                    );
                }
            );
        }

        if (this.state.display === 'feed') {
            return (
                <div className='Container'>
                    <h2>Tracking: {this.props.keyword}</h2>
                    <div className='tweets'>
                        {tweets}
                    </div>
                </div>
            );
        }
    }
}

export default Container;
