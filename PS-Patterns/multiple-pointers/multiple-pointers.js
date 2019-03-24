// ==========================================================================================================

    // Write a function called sumZero which accepts a sorted array of intezers, The function should find
    // the first pair where the sum is 0. output =: return an array that includes both values that sum to zero 
    // or 
    // undefined if the pair does not exist 

// ==========================================================================================================



/////////////// NAIVE GATE  ///////////////

//outputs :=>> if there's pair that represent 0, then output will be an array with that pair [-1,1] | otherwise will return 'get a life'

function sumZero(sortedArray){
  
    // for each item of array 
    for(let i = 0; i < sortedArray.length; i++){
         // we will loop over each number of array except the one which is current array item 
         for(let j = i+1; j < sortedArray.length; j++){
              // if current item + iretated remaining array's item === 0
              if((sortedArray[i] + sortedArray[j]) === 0){
                   /// return [current item + that iretated array]
                  return [sortedArray[i],sortedArray[j]]
              }
           
         }
        
    }
   
     // there' is no match then return 'get a life'   
     return 'get a life'    
}; 

console.log(sumZero([-1,0,3,2])); 