// convert to matrix from an object.

const data = {
    frontend : 'Kevin',
    backend: 'Emily',
    desing:'Adriel',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values.

const data  = {
    frontend : 'Kevin',
    backend: 'Emily',
    desing:'Adriel',
}

// To array.
const values = Object.values(data);
console.log(values);


// Padding.
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(7,'bai'));