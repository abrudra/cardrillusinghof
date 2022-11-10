/*/ ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that
 only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array 
 in the console.*/

 function carDrillTwo6(inventoryData){
       // let result = [];
       let onlyBmwAudi = inventoryData.filter(ele => ele.car_make == 'BMW' || ele.car_make == 'Audi')
        // let onlyBmwAudi = inventoryData.map((ele) => {
        //     ele.car_make == 'BMW' || ele.car_make == 'Audi' ? 
        //     result.push(ele): 1
        // })
        //return result;
        return JSON.stringify(onlyBmwAudi)
 }

 module.exports.problem6 = carDrillTwo6;