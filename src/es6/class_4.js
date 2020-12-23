// Classes.


class calculator{
    constructor(){
        this.value = 0;
        this.value1 = 0;
    }
    sum(value, value1){
        this.value1 = value1
        this.value = value;
        return this.value + this.value1;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

import hello, {Hello} from './module'
console.log(hello);


// Generators
// Retorna valores segun el algoritmo definido.

function* helloworld(){
    if (true) {
        yield 'hello';
    }
    if (true) {
        yield 'world';
    }
}

const generatorHello = helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
