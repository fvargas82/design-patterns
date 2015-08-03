// Each of the following options will create a new empty object: 
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();

//There are then four ways in which keys and values can then be assigned to an object: 

// ECMAScript 3 compatible approaches 

// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties 
var key = newObject.someKey; // Access properties 

// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties 
var key = newObject['someKey']; // Access properties 

// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/ 

// 3. Object.defineProperty 
Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

// 4. Object.defineProperties 
Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
}); 