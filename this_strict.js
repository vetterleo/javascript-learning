"use strict";

// this in global space

console.log(this); // globalObject that is window object in browser but different for others environments (global for node)

// this inside a function 

function x() {
    console.log(this) // undefined
};

x();