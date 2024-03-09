"use strict";

// this in global space

console.log(this); // globalObject that is window object in browser but different for others environments (global for node)

// this inside a function 

function x() {
    // the value depend on strict / non strict mode
    console.log(this); // window for non strict mode / undefined for strict mode
};

x();

// this inside non strict mode - (this substitution)

    // if the value of this keyword is undefined or null
    // this keyword will be replaced with global object
    // only in non stric mode

// the value of this keyword depend on how this is called

// From now on all example are run in strict mode

x(); // undefined
window.x(); // window

// this inside a object's method

const student = {
    name: "Marc",
    printName: function() {
        console.log(this);
        console.log(this.name);
    }
}
student.printName() // student - a

const student2 = {
    name: "Eric"
}

// call apply bind methods (sharing methods)

student.printName.call(student2); // student2 - Eric

// this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);
    },
    z: function() {

        // enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y()
    },
    c: console.log(this) // window
}

obj.x(); // window


// this inside nested arrow function

const obj2 = {
    a: 10,
    z: function() {

        const y = () => {
            console.log(this)
        }
        y()
    },
}

obj2.z(); // obj

// this inside DOM => reference to HTMLElement