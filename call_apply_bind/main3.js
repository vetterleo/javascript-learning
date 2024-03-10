let name = {
    firstName: 'Marc',
    lastName: 'Dutroux',
};

let printFullName = function(hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}

printFullName.call(name, 'Lyon', 'Rhone');

let name2 = {
    firstName: 'Jean',
    lastName: 'Perraux'
};

// Function borrowing
printFullName.call(name2, 'Marseille', 'Provence');


// apply methods - same as call but only arguments passing
// is different
printFullName.apply(name2, [ 'Marseille', 'Provence' ]);

//bind method - return a method which is a copy which can be called later
let printMyName = printFullName.bind(name2, 'Marseille', 'Provence');
console.log(printMyName);
printMyName();