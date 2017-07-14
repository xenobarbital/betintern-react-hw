import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <details>
                    <summary>
                        {this.props.firstName} {this.props.lastName}
                    </summary>
                    <p>Unique ID: {this.props.guid}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Phone: {this.props.phone}</p>
                </details>
            </div>
        );
    }
}

export default Contact;
