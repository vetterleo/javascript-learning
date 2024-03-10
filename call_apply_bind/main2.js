let name = {
    firstName: 'Marc',
    lastName: 'Dutroux',
};

let printFullName = function(hometown) {
    console.log(`${this.firstName} ${this.lastName}`);
}

printFullName.call(name);

let name2 = {
    firstName: 'Jean',
    lastName: 'Perraux'
};

// Function borrowing
printFullName.call(name2);
