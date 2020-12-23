// Old way to multiline a string.
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit \n' +
'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

console.log(lorem);

//New way 

let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
console.log(lorem2);


// destructuring

let person = {
    'name' : 'Kevin',
    'age' : 21,
    'country' : 'CR'
}

// Old way.
console.log(person.name, person.age, person.country);

// Es6
let {name, age, country} = person;
console.log(name, age, country);


// Spread operator

let team1 = ['Kevin', 'Emily', 'Chiri'];
let team2 = ['Julia', 'Fernqanda', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);