/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
 let numberArray = [1,2,3,4,5];

 let result = [];
 
 function reescribir(array, original , reemplazo){

    for(let j=0;j<array.length;j++)    {

        if (array[j]==original){

            array=array.slice(0,j)+ reemplazo +array.slice(j+1);

        }
    }

    return array;
 }
 
 
 //PRIMERA PARTE CAMBIANDO LOS NUMEROS POR LETRAS
 
 for (let i=0;i<numberArray.length;i++){
     if(i==0){
         numberArray.splice(i,1,"one");
     }
     if(i==2){
         numberArray.splice(i,1,"three");
     }
     if(i==4){
         numberArray.splice(i,1,"five");
     }
     
 }
 
 //SEGUNDA PARTE CAMBIANDO CADA ELEMENTO
 
 let stringArray = ["foo","bar","baz","qux","echo"]
 
 for (let i=0;i<stringArray.length;i++){
     
     //foo → f00
     if(i==0){ stringArray[i]=reescribir(stringArray[i],"o", 0); }
     
     
     //bar → Bar
     if (i==1){
         
        stringArray[i]= stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
         
     }
     
     //baz→b@z
     
     if(i==2){stringArray[i]=reescribir(stringArray[i],"a", "@");}
     
     
     //qux→quX
     
     if(i==3){
         stringArray[i]=  stringArray[i].slice(0,stringArray[i].length-1) + stringArray[i].charAt(stringArray[i].length-1).toUpperCase(); }
     
     
     //echo→3ch0
 
 
     if (i==4){
        stringArray[i]=reescribir(stringArray[i],"e", 3); 
        stringArray[i]=reescribir(stringArray[i],"o", 0);
     }    
     
     
 }
 
 result.push("h@ck");

 for (let k=0;k<numberArray.length;k++){
     result.push(numberArray[k]);
 }

 result.push("h@ck");

     for (let k=0;k<stringArray.length;k++){
     result.push(stringArray[k]);
 }


 result.push("h@ck");


 
 //export result
 module.exports = result;