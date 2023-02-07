function evenOdd(string){
    const stringLength = string.length;
    let result;
    if(typeof input === 'string' || input instanceof String){
        if(stringLength % 2 === 0){
            result = "Even";
        }
        else{
            result = "Odd";
        }
        return result;
    }
    else{
        return "Please input the string type variable"
    }
}
const input = evenOdd('phero');
console.log(input);