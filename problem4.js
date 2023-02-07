function findingBadData(number){
    let data = Array.isArray(number)
    if(data === true){
        let count = 0;
        for(i = 0; i < number.length; i++){
            const element = number[i];
            if(element < 0){
                count = count+1;  
            }  
        }
        return count;
    }
    else{
        return 'Please input the array number'
    }  
}
const inputVariousNumber = [ -4, -9, -5, -33, -55,789,-48,809,-484 ];
const badData = findingBadData(inputVariousNumber);
console.log(badData);