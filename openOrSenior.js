//data is an array of two index arrays [player age, player handicap]
function openOrSenior(data) {
    //result array will be filled with strings of "Senior" or "Open"
    let resultArray = []
    //iterate through data to access each member
    for (let i = 0; i < data.length; i++) {
        let currentMember = data[i]
        //assess first index (age) then handicap
        if (currentMember[0] >= 55 && currentMember[1] > 7) {
            //if 55 or older AND handicap greater than 7 theyre a senior
            resultArray.push("Senior")
        } else {
            resultArray.push("Open")
        }
    }
    console.log(resultArray)
    return resultArray
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]);
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);