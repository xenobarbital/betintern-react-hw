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

// testing
//let human = new Contact(1234, 'John', 'Smith', '555-456-77-66');
//for (let prop in human) {
//    console.log(`${prop}: ${human[prop]}`);
//}

let addContact = (id, firstName, lastName, phone) => {
    addressbook.push(new Contact(id, firstName, lastName, phone));
}

addContact(1234, 'John', 'Smith', '555-545-88-99');
console.log(addressbook);
console.log(addressbook[0]);
