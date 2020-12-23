let name = 'Kevin';
let age = 32;

// Old way
obj = { name: name, age: age };

// Es6
obj2 = {name, age};

console.log(obj);
console.log(obj2);


// Arrow functions.

const names = [
    {name:'Kevin', 'age':21},
    {name:'Andrey', 'age':17}
];

let listOfNames = names.map(function (item) { 
    console.log(item.name);
 })

 let listOfNames2 = names.map(item => console.log(item.name, item.age));


 const listOfNames3 = (name, age) => {

 }

 const listOfNames4 = name =>{

 }

//  Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('hey!!!')
        } else{
            reject(':c')
        }
    });
}


helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));