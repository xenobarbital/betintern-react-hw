let addressbook = [];

// GUID generator
function guidGenerate() {
    function f() {
        return (Math.random() * 100).toString(16).substring(3, 7);
    }
    return `${f()}${f()}-${f()}-${f()}-${f()}-${f()}${f()}${f()}`;
}

class Contact {
    constructor(firstName, lastName, phone) {
        this.id = guidGenerate();
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
let addContact = (firstName, lastName, phone) => {
    addressbook.push(new Contact(firstName, lastName, phone));
}

// deleting contact
let deleteContact = id => {
    let i = addressbook.findIndex(elem => elem.id === id);
    addressbook.splice(i, 1);
}

// testing
addContact('John', 'Smith', '555-545-88-99');
addContact('Penguin', 'Fat', '555-987-87-66');
addContact('Cormorant', 'Stupid', '555-874-22-33');

console.log(addressbook);

deleteContact(1548);

console.log(addressbook);
