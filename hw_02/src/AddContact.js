import React, { Component } from 'react';
import './AddContact.css';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };
        this.getFName = this.getFName.bind(this);
        this.getLName = this.getLName.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPhone = this.getPhone.bind(this);
        this.addContact = this.addContact(this);
    }

    getFName(event) {
        this.setState({ firstName: event.target.value });
    }

    getLName(event) {
        this.setState({ lastName: event.target.value });
    }

    getEmail(event) {
        this.setState({ email: event.target.value });
    }

    getPhone(event) {
        this.setState({ phone: event.target.value });
    }

    addContact() {
        this.props.addContact(this.state);
        this.setState({ firstName: '' });
        this.setState({ lastName: '' });
        this.setState({ email: '' });
        this.setState({ phone: '' });
    }

    render() {
        return (
            <div className="AddContact">
                <label>First name: &nbsp;
                    <input type="text" onChange={this.getFName} />
                </label><br />
                <label>Last name: &nbsp;
                    <input type="text" onChange={this.getLName} />
                </label><br />
                <label>Email: &nbsp;
                    <input type="text" onChange={this.getEmail} />
                </label><br />
                <label>Phone: &nbsp;
                    <input type="text" onChange={this.getPhone} />
                </label><br />
                <button onClick={this.addContact}>Add</button>
            </div>
        );
    }
}

export default AddContact;
