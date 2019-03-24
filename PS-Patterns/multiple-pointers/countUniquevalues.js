// ===============================================================================================================================

    // implement a function a called countUnique values, which accept a sorted array, and count the uniquie values of the array, 
    // There can be negitive number is the array, but it will sorted  

// ===============================================================================================================================

// input :  // sorted array  ==> [-2,-1,-1,0,1]; 
// outputs : should return  ==> 4 


function countUniqueValues(arr){

     // create 1 pointer from the beggining of the array 
    // NOTE: another pointer will created in the forloop 
        // for each element in the array from right next index of pointer 1 ===>> here we will create a another varibble 
            // if pointer one is not equal to pointer 2 then increment pointer 1 


            if(arr.length === 0){
                return 'get a life'; 
            }

            let pointerOne = 0; 

            for(let pointerTwo = 1; pointerTwo < arr.length; pointerTwo++){
                if(arr[pointerOne] !== arr[pointerTwo]){
                    pointerOne++
                    arr[pointerOne] = arr[pointerTwo]; 
                }
            }

            return pointerOne+1

}; 

console.log(countUniqueValues([-2,-1,-1,0,1])); 



