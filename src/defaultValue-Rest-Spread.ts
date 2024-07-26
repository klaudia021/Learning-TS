const addFunction = (a: number, b: number = 1) => {
    return a + b;
}

// console.log(addFunction(1, 2));
// console.log(addFunction(1));

const hobbies = ['Cooking', 'Running', 'Music'];
const hobbies2 = ['Tabletop', 'Gaming'];

hobbies.push(...hobbies2);

const [firstHobby, ...others] = hobbies;

console.log(hobbies);
console.log(firstHobby);
console.log(others);

const addWithRest = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
}

console.log(addWithRest(1, 2, 3, 5));
console.log(addWithRest(5, 5));