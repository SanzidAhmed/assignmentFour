// first problem

// This function for finding 

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



// Second problem

function evenOdd(string){
    const stringLength = string.length;
    let result;
    if(isNaN(string)){
        if(stringLength % 2 === 0){
            result = "Even";
        }
        else{
            result = "Odd";
        }
        return result;
    }
    else{
        string = parseInt(string);
        return "Please input the string type variable"
    }
}
const input = evenOdd('chat gpt');


// third problem


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


// fourth problem

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
const inputVariousNumber = [ -4, -9, -5, -33, -55, 789, -48, `809,-484 ];
const badData = findingBadData(inputVariousNumber);

// fifth problem


function gemsToDiamond(friend1, friend2, friend3){
    const friend1GemsCapacity = friend1 * 21;
    const friend2GemsCapacity = friend2 * 32;
    const friend3GemsCapacity = friend3 * 43;
    const totalFriendGemsCapacity = (friend1GemsCapacity + friend2GemsCapacity + friend3GemsCapacity);
    if(totalFriendGemsCapacity <= 2000){
        return totalFriendGemsCapacity;
    }
    else{
        return totalFriendGemsCapacity - 2000;
    }
}
const friendsGemsCapacity = gemsToDiamond(100, 5, 1);