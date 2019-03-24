// ====================================================================================================================================

// problem :=>>
// Write a function called same , which accepts 2 arrays, the function should return true, if every value in the array has i'ts 
// corresponding value squared in the second array, the frequency of value must be same 

// ====================================================================================================================================




// inputs : 2 array , ([1,2,3],[1,4,6]); 
// outputs : should return true because every array has it's corresponding squared value in the second value 



function squared(arr1,arr2){
 
    //check if the input is valid 
    if(!(arr1.length === arr2.length)){
        return false; 
    } 

    for (let i = 0; i< arr1.length; i++){
        let currentIndex = arr2.indexOf(arr1[i]**2)
        if(currentIndex === -1 ){
            return false; 
        }
        arr2.splice(currentIndex,1); 
    }

    return true; 
}; 

// console.log(squared([5,1,2,3,6],[1,9,4,25,6])); 



//////////////////////////      FREQUENCY COUNTER PATTERN / ALGORITHM        ///////////////////////////////


function frequencyCounter(arr1,arr2){
   if(arr1.length !== arr2.length){
       return false; 
   }; 

  const frequencyCounter1 = {}; 
  const frequencyCounter2 = {}; 

   for(let value of arr1){
    // so there is a value of arr1[value] return that value with plus 1 and if not return that a value with 1
       frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1; 
   }
   for(let value of arr2){
    // so there is a value of arr1[value] return that value with plus 1 and if not return that a value with 1
       frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1; 
   }

  for(let key in frequencyCounter1){
    if(!(key**2 in frequencyCounter2)){
        return false; 
    }
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
        return false; 
    }
  }

  return true; 

}; 

console.log(frequencyCounter([5,1,2,3,6],[1,9,4,25,36]))

