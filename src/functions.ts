{

    function add(n1: number, n2: number): number {
        return n1 + n2;
    }

    function printResult(num: number) : void {
        console.log('Result: ' + num);
    }

    printResult(add(1, 2));

    let combineValues: (a: number, b: number) => number;
    //any function that matches this type can be assigned to combineValues 
    combineValues = add;
    //combineValues = printResult; //This won't work, because combineValues only takes function that has 2 number arguments and returns a number. 
    //This is combineValues's function type.


    //CALLBACKS
    function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {  
        const result = n1 + n2;
        cb(result);
    }

    addAndHandle(12, 20, (result) => {
        console.log(result);
        //return result;  //We specifically said in our addAndHandle that we will return 'nothing', so even if we return something in the callback, typescript will ignore it.
    });
}