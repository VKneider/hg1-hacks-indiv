/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */

 function reescribir(array, original , reemplazo){

    for(let j=0;j<array.length;j++)    {

        if (array[j]==original){

            array=array.slice(0,j)+ reemplazo +array.slice(j+1);

        }
    }

    return array;
 }





let arr = ["foo","bar","baz","qux","echo"];
let result = [];
result = arr.slice(1,4);

for(let i=0;i<result.length;i++){

    if(i<2){
        result[i]=reescribir(result[i], "a", "@")
    } else {
        
        for (let j=0; j<result[i].length;j++){
    
            result[i]=result[i].slice(0,j)+ result[i][j].toUpperCase() +result[i].slice(j+1);
    
        }

    }


}


   

        
        
console.log(result);

//export result
module.exports = result;