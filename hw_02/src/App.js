import React, { Component } from 'react';
import './App.css';
import ContactList from './ContactList';

class App extends Component {

    componentDidMount() {
        fetch('https://localhost:3070/prices')
            .then(response => response.json())
            .then(response => console.log(response));
    }


  render() {
    return (
        <div className="App">
            <ContactList />
        </div>
    );
  }
}

export default App;
