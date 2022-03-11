//write a factorial calculation
// ex 5 x 4 x 3 x 2 x 1

function factorial(number){
    if (number<0){
        return undefined;
    }
    else if(number == 0){
        return 1;
    }
    let result = 1;
        //a loop, moving from the greatest number to 1, and multiplying by each
    for (i=number; i>0; i--){
        console.log({i});
            result = result * i;
            console.log({result})
    }
    console.log({result})
    return result;
}

// factorial(5)

function recursiveFactorial(number){
    console.log({number})
    if (number<0){
        return undefined;
    }
    else if(number == 0){
        return 1;
    }
    else if(number == 1){
        return number;
    }
    //we want the function to multiply by number-1
    console.log(number * recursiveFactorial(number-1))
    return number * recursiveFactorial(number-1)
}

// console.log(recursiveFactorial(5))