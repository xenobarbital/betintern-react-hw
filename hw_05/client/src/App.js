import React, { Component } from 'react';
import Websocket from 'react-websocket';
import sentiment from 'sentiment';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        };
    }

    handleData(data) {
        let response = JSON.parse(data);
        let tweet = {
            user: response.user.name,
            image: response.user.profile_image_url,
            time: response.created_at,
            text: response.text,
            screenName: response.user.screen_name
        }
        this.setState({ feed: [tweet, ...this.state.feed] });
        console.log(response);
    }

    render() {
        let tweets = this.state.feed.map(
            (elem, i) => {
                let url = 'https://twitter.com/' + elem.screenName;
                let analysis = sentiment(elem.text);
                return (
                    <div
                        className="tweet"
                        key={i}
                    >
                        <a
                            href={url}
                            target='_blank'
                        >
                            <img src={elem.image} alt='userpic'/>
                        </a>
                        <h3>{elem.user}</h3>
                        <p>{elem.text}</p>
                        <footer>{elem.time}</footer>
                        <ul>
                            <li>Score: {analysis.score}</li>
                            <li>Score/wordcount ratio: {analysis.comparative}</li>
                            <li>AFINN matches: {analysis.words}</li>
                            <li>Positive: {analysis.positive}</li>
                            <li>Negative: {analysis.negative}</li>
                        </ul>
                    </div>
                );
            }
        );
        return (
            <div className="App">
                Hello sockets
                <Websocket
                    url='ws://localhost:3070'
                    onMessage={this.handleData.bind(this)}
                />
                {tweets}
            </div>
        );
    }
}

export default App;
