/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let i=7;

while (i>=1){

    if (i%2!=0){
        result.push(i);
    }
    i--;
}
//export result
module.exports = result;