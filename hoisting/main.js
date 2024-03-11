// even before code is exectuted memory is allocated to variable and function

getName(); // Namaste javascript
console.log(x); // undefined
console.log(getName); // function
console.log(getName2); // undefined
console.log(getName3); // undefined

var x = 7;

function getName() {
    console.log('Namaste javascript');
};

var getName2 = () => {
    console.log('Namaste javascript');
};

var getName3 = function() {
    console.log('Namaste javascript');
};

