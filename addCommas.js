function addCommas(num) {
    const strNum = String(num)
    let count = 0
    let newNum = '';
    //Decrementing loops will create a new string with a ',' every three passes
    //Returns the number as a string
    for(let i = strNum.length; i--; i == 0){
        if(count == 3){
            newNum+= ','
            count = 0
        }
        newNum += (strNum[i])
        count++;
    }
    return newNum.split("").reverse().join("")
}

module.exports = addCommas;