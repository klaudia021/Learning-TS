//UNION, LITERAL TYPES, TYPE ALIASES
{
    type Combinable = number | string;
    type ConversionDescriptor = 'as-number' | 'as-text';

    const combine = (
    input1: Combinable, 
    input2: Combinable, 
    resultType: ConversionDescriptor
    ) => {
        let result;

        if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
            result = +input1 + +input2;
        } else {
            result = input1.toString() + input2.toString();
        }

        return result;
    }

    const a = 1;
    const b = 1.64;
    const c = '6';
    const d = ' times'

    console.log(combine(a, b, 'as-number')); //2.6399999999999997
    console.log(combine(c, b, 'as-text')); //61.64
    console.log(combine(c, b, 'as-number')); //7.64
    console.log(combine(c, d, 'as-text')); //6 times
    //console.log(combine(c, d, 'as-string')); //this won't work because of literal types we defined

    type User = { name: string, age: number };
    const u1: User = { name: 'Max', age: 20 };
}

