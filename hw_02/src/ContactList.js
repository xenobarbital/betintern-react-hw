import React, { Component } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theList: [
                {
                    firstName: 'John',
                    lastName: 'Smith',
                    email: 'somemail@somesite.com',
                    phone: '555-457898'
                }
            ]
        };
        //this.addContact = this.addContact.bind(this);
    }


    guidGen() {
        const f = () => (Math.random() * 100).toString(16).substring(3, 7);
        return `${f()}${f()}-${f()}-${f()}-${f()}-${f()}${f()}${f()}`;
    }

    renderList() {
        const list = this.state.theList.map(
            (person, index) => {
                return (
                    <Contact
                        key={index}
                        firstName={person.firstName}
                        lastName={person.lastName}
                        guid={this.guidGen()}
                        email={person.email}
                        phone={person.phone}
                    />
                );
            }
        );
        return list;
    }

    addContact(newPerson) {
        this.setState({ theList: [...this.state.theList, newPerson] });
    }

    // componentDidMount() {
    //     fetch('https://localhost:3070/prices').then(function(response) {
    //         console.log(response);
    //     });
    // };


    render() {
        return (
            <div className="ContactList">
                <AddContact addContact={this.addContact.bind(this)} />
                {this.renderList()}
            </div>
        );
    }
}

export default ContactList;
