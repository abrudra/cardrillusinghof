/*// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of 
the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"*/

function carDrillTwo2(inventoryData){
    let str = ""
    let lastIndex = inventoryData.length - 1;
  let lastInfo = inventoryData.map((ele,index) => {
    if( index === lastIndex){
        str = `"Last car is a ${ele.car_make} ${ele.car_model} "`
    }
  });
  
return str
}

module.exports.problem2 = carDrillTwo2;
