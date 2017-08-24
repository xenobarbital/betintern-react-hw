import React, { Component } from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = { textScore: null };
    }

    msApi(input) {
        const URL = 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment';
        const MY_HEADERS = new Headers({
            'Ocp-Apim-Subscription-Key': 'c3b590da9f49456883cf4d0c46c1c619',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        let text = {
            documents: [
                {
                    id: '_',
                    text: input
                }
            ]
        };

        fetch(URL, {
            method: 'post',
            headers: MY_HEADERS,
            body: JSON.stringify(text)
        }).then(response => response.json())
            .then(response => {
                console.log(response.documents[0].score);
                this.setState({ textScore: response.documents[0].score.toFixed(6) });
            });
    }

    componentDidMount() {
        this.msApi(this.props.text);
    }

    render() {
        return (
            <div className='Tweet'>
                <h3>{this.props.user}</h3>
                <img src={this.props.image} alt='upic'/>
                <p>{this.props.text}</p>
                <p>Text score: {this.state.textScore}</p>
                <footer>{this.props.time}</footer>
            </div>
        );
    }
}

export default Tweet;
