// =================================================================================================
        // write a function which takes in a string and returns count of each caracter in the string as [{a: 3}]
// =================================================================================================


// inputs : strings
// outputs : output will be an array =>> [{a: 3}, {b: 4}]
// yes 



function stringCount(str){
    const arrayOfCountStrings = []; 
    for (let i = 0; i <= str.length; i++){
      for(let j = 0; j <= str.length; j++){
          if (str[i] === str[j]){
              arrayOfCountStrings.push(str[i]); 
          }
      }
    }
   
    return charCount(arrayOfCountStrings); 
     
}; 

function charCount(arrayOfCountStrings){
    const completeResult =  []; 
    let real = []; 
    for (let i = 0; i <= arrayOfCountStrings.length; i++){
        real.push(giveUslengthOfStings(arrayOfCountStrings[i] , arrayOfCountStrings)); 
    }

    return real; 
}

function giveUslengthOfStings(currentStr, array){
    let x = currentStr; 
   const objects = {
    x : array.slice(array.indexOf(currentStr), array.lastIndexOf(currentStr+1)).length
   }
   return objects; 
}; 
console.log(stringCount('tawhidabdullah')); 



