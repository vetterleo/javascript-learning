let arr = [ "Eric", "Marc" ];

// Every object in javascript has a prototype
console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__ === null); // true

let object = {
    name: "Martin",
    city: "Lyon",
    getIntro: function() {
        console.log(`${this.name} from ${this.city}`);
    }
};

console.log(object.__proto__ === Object.prototype); // true
console.log(object.__proto__.__proto__ === null); // true

function fun() {

};

console.log(fun.__proto__ === Function.prototype); // true
console.log(fun.__proto__.__proto__ ===  Object.prototype); // true
console.log(fun.__proto__.__proto__.__proto__ === null); // true

let object2 = {
    name: "Thomas"
}

// never do this
object2.__proto__ = object;

// Javascript does not find the propertis in the object2 Object 
// so it goes through the prototype chain and find the properties 
// in the object Object 
console.log(object2.city) // lyon
console.log(object2.getIntro()) // Thomas from Lyon

Function.prototype.myBind = function() {
    console.log('This is Leo learning javascript');
}

function fun2() {

}

// Every function can now use the myBind method
console.log(fun.__proto__.myBind()); // This is Leo learning javascript
console.log(fun.myBind()); // This is Leo learning javascript
console.log(fun2.myBind()); // This is Leo learning javascript
