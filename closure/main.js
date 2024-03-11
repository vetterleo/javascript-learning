// closure means a function binds together with its lexical context 

function x1() {

    var a = 7;

    function y() {
        console.log(a);
    };
    y();
}

x1() // 7
 
// ---------------------------------


function x2() {

    var a = 7;

    return function y() {
        console.log(a);
    };
}

var z1 = x2();
console.log(z1); // function
z1(); // 7

// ---------------------------------

function x3() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z2 = x3();
console.log(z2); // function
z2(); // 100

// ---------------------------------

function c() {

    b = 900;
    function x() {

        var a = 7;
        function y() {
            console.log(a, b);
        }
        
        y();
    }
    x();
}

c() // 7 900


// Uses of closure 
//  - Module Design Pattern
//  - Currying
//  - Functions like once
//  - memoize
//  - maintaining state un async world
//  - setTimeouts
//  - Iterators
//  - and many more ... 

