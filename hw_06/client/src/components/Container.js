import React, { Component } from 'react';
import Tweet from './Tweet';
import Charts from './Charts';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'feed',
            feed: [],
            scores: []
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.data) {
            this.setState({ feed: [...this.state.feed, newProps.data] });
        }
    }

    //diagnostic hook
    componentDidUpdate() {
        console.log('scores: ', this.state.scores);
    }

    addScore(score) {
        this.setState({ scores: [...this.state.scores, score] });
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
                            addScore={this.addScore.bind(this)}
                        />
                    );
                }
            );
        }

        if (this.state.display === 'feed') {
            return (
                <div className='Container'>
                    <h2>Tracking: {this.props.keyword}</h2>
                    <button>Save</button>
                    <button
                        onClick={() => {
                            this.setState({
                                feed: [],
                                scores: []
                            });
                        }}
                    >
                        Clear
                    </button>
                    <div>
                        <div className='tweets'>
                            {tweets}
                        </div>
                        <Charts data={this.state.scores}/>
                    </div>
                </div>
            );
        }
    }
}

export default Container;
