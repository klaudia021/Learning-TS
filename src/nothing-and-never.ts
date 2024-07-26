{
    let userInput: unknown;
    let userName: string;

    userInput = 4;
    userInput = 'Max';

    //userName = userInput;   //error, if we switch userInput to any, the error will go away

    if (typeof userInput === 'string') {
        userName = userInput;
    }

    function generateError(message: string, errorCode: number): never {
        throw { 
            message: message, 
            errorCode: errorCode 
        };
    }

    const result = generateError('Error occurred!', 500);    //this function is intended to never return anything
    console.log('Result: ' + result);
}