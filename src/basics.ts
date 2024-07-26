{
    console.log('Hello from this.');

    const addNumbers = (num1: number, num2: number) => {
        return num1 + num2;
    }

    const num1 = 5;
    const num2 = 12.6;

    const notNumber = 'String';
    let text: string;
    //text = 5; //error

    let isNumber: boolean;
    isNumber = true;

    console.log(addNumbers(num1, num2));
    //console.log(addNumbers(num1, notNumber));   //error
}