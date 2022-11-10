/*// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model
 names into alphabetical order and log the results in the console as it was returned.*/

 function carDrillTwo3(inventoryData){

    let result = [];
    let carModelSort = inventoryData.map((ele) =>{
        result.push(ele.car_model)
    })

   
    return result.sort()
 }

 module.exports.problem3 = carDrillTwo3;