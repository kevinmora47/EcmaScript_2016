// on hold 

const obj = {
    name:'Kevin',
    age: 21,
    country:'CR'
}

// Operador de reposo.

let {name, ...all} = obj;
console.log(name, all);

// Propagration operator.

const obj2 = {
    name:'kevin',
    age: 21
}

const obj3 = {
    ...obj2,
    country:'CR'
}

console.log(obj3);


