//write a function that raises a number to a power
//all powers will be whole, positive numbers
//ex: base = 3, exponent =5 will return 3^5

function raisingToPower(base, exponent){
    //write a loop that for the value of exponent, it will multiply the base by itself
    let currentNum = base;
    for (i=1;i<exponent;i++){
        //for every 1 exponent, multiply by base
        currentNum = currentNum * base
    }
    console.log(currentNum)
    return currentNum;
}

// raisingToPower(-5,4)

function recursivePower(base,exponent){
    if (exponent==1){
        //once you have parsed out all the exponents, multiply by base to end call stack
        return base;
    }
    let newExponent = exponent -1
    //decrement exponent during recursion
    return base * recursivePower(base,newExponent)
}

// console.log(recursivePower(-5,4))