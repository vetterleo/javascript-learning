let name = {
    firstName: 'Marc',
    lastName: 'Dutroux',
    printFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

name.printFullName();

let name2 = {
    firstName: 'Jean',
    lastName: 'Perraux'
};

// Function borrowing
name.printFullName.call(name2);
