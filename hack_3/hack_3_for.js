/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];
for (let i=1;i<=5;i++){
    result.unshift(i)
}

//export result
module.exports = result;