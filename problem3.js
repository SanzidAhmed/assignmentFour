function isLGSeven(input){
    const result =(input-7);
    if(isNaN(result)){
        return 'Please use the number type variable'
    }
    else{
        
        if( result < 7){
            return result;
        }
        else{
            const  result2 = input * 2 ;
            return result2;
        }
    }
}
const originalOutput = isLGSeven('Sanzid');
console.log(originalOutput);