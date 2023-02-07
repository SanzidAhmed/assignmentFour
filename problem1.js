function mindGame(positiveNumber){
    const result = ((((positiveNumber*3)+10)/2)-5);
   if(isNaN(positiveNumber)){
    return 'please input the number type variable';
   }
   else{
    positiveNumber = parseInt(positiveNumber);
    if(positiveNumber < 0){
        return "Please input the positive number";
    }
    else{
        return result;
    }
   }  
}
const inputNumber = mindGame(-5);
console.log(inputNumber);