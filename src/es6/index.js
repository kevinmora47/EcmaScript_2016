// Default Params and contac

// Old way, before ecmascript.
function newFunction(name, age, country){
    var name = name || 'Kevin';
    var age = age || 32;
    var country = country || 'CR';
    console.log(name, age, country);
}

// New way -> Es6

function newFunction2 (name = 'Kevin', age = 32, country = 'CR'){
console.log(name, age, country);
}

// Ways to call this function.

newFunction2();
// In this way we are telling to the function to set the default values.

newFunction2('Emily',20,'CR');


// Template literals.

// Old way.
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Es6
// Template literals.
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase);