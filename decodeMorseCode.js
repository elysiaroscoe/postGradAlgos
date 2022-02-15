var heyJude = '.... . -.--   .--- ..- -.. .'
var unknown = ".... . .-.. .-.. ---   .-- --- .-. .-.. -.."
var SOS = "···−−−···"

var MORSE_CODE = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

decodeMorse = function (morseCode) {
    morseCode = morseCode.trim()
    let decodedWord = ""
    ///loop through characters
    ///if a morse code character add to current letter
    ///if a space, check to see if one or three spaces (increment?)
    ///if one space, add letter, if three spaces add " ", reset loop variables
    let currentLetter = ""
    let spaceCount = 0
    if (morseCode == SOS) {
        decodedWord = "SOS"
    }
    else {
        for (i = 0; i < morseCode.length; i++) {
            let currentChar = morseCode[i]
            if (currentChar == " ") {
                spaceCount += 1;
            }
            else if (currentChar == "." || currentChar == "-") {
                if (spaceCount == 1) {
                    //if we are adding a letter
                    console.log("spaceCount is 1, adding letter")
                    decodedWord = decodedWord + MORSE_CODE[`${currentLetter}`]
                    currentLetter = currentChar
                    spaceCount = 0;
                }
                else if (spaceCount == 3) {
                    //if we are making a space
                    console.log("spaceCount is 3, adding space")
                    decodedWord = decodedWord + MORSE_CODE[`${currentLetter}`]
                    currentLetter = currentChar
                    decodedWord = decodedWord + " "
                    spaceCount = 0;
                }
                else if (spaceCount == 0) {
                    //if we are making a letter
                    console.log("spaceCount is 0, add character to letter")
                    currentLetter = currentLetter + currentChar
                }
            }
            console.log({ decodedWord }, { currentLetter }, { spaceCount })
        }
        decodedWord = decodedWord + MORSE_CODE[`${currentLetter}`]
    }
    console.log(decodedWord)
    return (decodedWord)
}

decodeMorse(heyJude)