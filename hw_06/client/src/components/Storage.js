import React, { Component } from 'react';
import Tweet from './Tweet';

class Storage extends Component {
    render() {
        let storage = [];
        for (let prop in localStorage) {
            storage.push(
                <div className='storedFeed'>{prop}</div>
            );
        }
        return (
            <div>
                <div className='displayedFeed'></div>
                <div className='feeds'>
                    {storage}
                </div>
            </div>
        );
    }
}

export default Storage;
