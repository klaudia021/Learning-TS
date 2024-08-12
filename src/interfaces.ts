//We define a structure of an object
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;
user1 = { 
    name: 'Max', 
    age: 32,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
};

user1.greet('Hello');

interface Named {
    readonly name?: string;
    outputName?: string;    //optional property with ?
}

interface Greetable extends Named/*, AnotherInterface*/ {
    greet(phrase: string): void;
}

class PersonClass implements Greetable/*, AnotherInterface*/{    //you can only inherit from one class, but you can implement multiple interfaces
    name?: string;   //if we comment this out, we will get an error
    age: number;    //We can have more fields, and more methods, but we must implement the ones for the interface

    constructor(n?: string, age = 30) {
        if (n) {
            this.name = n;
        }
        this.age = age;
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        console.log('Hi!');
    }
}

let user2 = new PersonClass('Manuel');
user2.name = 'Huan';
console.log(user2);

let user3: Greetable = user2;
//user3.name = 'Max'; //this will not work, because of the readonly in the interface

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

//The above with interface
interface AddFunction {
    (a: number, b:number): number;
}