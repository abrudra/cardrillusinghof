/*// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the 
dealer data containing only the car years and log the result in the console as it was returned.*/

function carDrillTwo4(inventoryData){
    let result = [];
    let carYear = inventoryData.map((ele => {
        result.push(ele.car_year);
    }))

    return result;
}

module.exports.problem4 = carDrillTwo4;