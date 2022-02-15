function findMissingLetter(array){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arrayIndex = 0
    let missingLetter = ""
    let lowerCase = false;
    for (i=0; i<alphabet.length; i++){
        if (alphabet[i] == array[arrayIndex].toLowerCase()){
        if (alphabet[i] == array[arrayIndex]){
            lowerCase = true;
            // console.log(lowerCase)
        }
        arrayIndex ++;
        //   console.log({arrayIndex})
        }
        else if (arrayIndex>0 && alphabet[i] != array[arrayIndex].toLowerCase()){
        missingLetter = alphabet[i];
        if(lowerCase){
            console.log({missingLetter})
            return missingLetter;
        }
        else{
            missingLetter = missingLetter.toUpperCase();
            console.log({missingLetter})
            return missingLetter;
        }
        }
    }
}


findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['O','Q','R','S']);
