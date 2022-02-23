/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    //empty array will hold each row at an index, ex: row 1 is arr[0]
    let arr = [];
    //pointer shows which index of the string we are considering
    let strIndex = 0;
    // for amt of rows array.push array into empty array
    for (let i = 0; i < numRows; i++) {
        //instantiate an empty string in each row
        arr.push("")
    }
    // console.log(arr)
    while (strIndex < s.length) {
        // while not at the end of the string
        for (let i = 0; i < numRows; i++) {
            //add the next char of the string to the string corresponding with the descending row
            if(s[strIndex] != undefined){
                arr[i] = arr[i] + s[strIndex];
            }
            //increment string index
            strIndex++;
        }
        console.log(arr);
        // loop through string from the numRow-1 (2nd to the last row)
        for (let i = (numRows - 2); i > 0; i--) {
            //add the next char of the string to the string corresponding with the ascending row (creating diagonal)
            if(s[strIndex] != undefined){
                arr[i] = arr[i] + s[strIndex];
            }
            //increment string index
            strIndex++;
        }
        console.log(arr)
    }
    //instantiate one string to rule them all
    let str = ""
    //loop through the array
    for(let i=0; i<arr.length; i++) {
        //add each row's string to the total string
        str = str.concat(arr[i]);
    }
    return str;

};

// console.log(convert(s = "PAYPALISHIRING", numRows = 3))
console.log(convert(s = "PAYPALISHIRING", numRows = 4))


// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// P   A   H   N
// A P L S I I G
// Y   I   R

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Input: s = "A", numRows = 1
// Output: "A"