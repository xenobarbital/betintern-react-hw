let addressbook = [];

class Contact {
    constructor(id, firstName, lastName, phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set setPhone(newPhone) {
        this.phone = newPhone;
    }
}

// adding contact
let addContact = (id, firstName, lastName, phone) => {
    addressbook.push(new Contact(id, firstName, lastName, phone));
}

// deleting contact
let deleteContact = id => {
    let i = addressbook.findIndex(elem => elem.id === id);
    addressbook.splice(i, 1);
}

// testing
addContact(1234, 'John', 'Smith', '555-545-88-99');
addContact(1548, 'Penguin', 'Fat', '555-987-87-66');
addContact(9875, 'Cormorant', 'Stupid', '555-874-22-33');

console.log(addressbook);

deleteContact(1548);

console.log(addressbook);
