function isIsogram(str){
    //...
    //iterate through the string for each place and see if its equal?
    for (let i=0;i<str.length;i++){
        let letter = str[i]
        for (let j=i+1; j<str.length;j++){
            if(str[i].toLowerCase() == str[j].toLowerCase()){
            return false;
            }
        }
    }
    return true;
}

//expect true
console.log(isIsogram("Dermatoglyphics"));

//expect true
console.log(isIsogram("isogram"));

//expect false
console.log(isIsogram("aba"));