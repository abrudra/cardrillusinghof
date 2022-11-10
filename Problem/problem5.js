/*// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the
 previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.*/

const previousArray = require('/home/expert/VSCodePractice/carDrillHof/Problem/problem4');
const inventoryData = require('/home/expert/VSCodePractice/carDrillHof/data.json')

let previousResult = previousArray.problem4(inventoryData)

//console.log(previousResult)
 function carDrillTwo5(inventoryData){
    let str = ""
        let result = previousResult.filter(ele => ele < 2000)
         return str = `${result} and length of log is ${result.length}`
 }
 


 module.exports.problem5 = carDrillTwo5;