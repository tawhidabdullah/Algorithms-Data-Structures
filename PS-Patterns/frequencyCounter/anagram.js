// ===============================================================================================================================

    // Write a function which will take 2 string , and will return true if the first one is an anagram of 2nd one 

// ===============================================================================================================================


// inputs : ('tawhid','dihwat'); 
// output : should be true if the first sting is an angram of 2nd one 



function anagram(str1,str2){

    if(str1.length !== str2.length){
        return false ; 
    }

    // we need 2 empty object to store string counts of str1 and str2; \
    const compareString1 = {}; 
    const compareString2 = {}; 
        // then we will count the number of appearence of each string in the theirsting (for both =>> str1,str2);
        for(let value of str1){
            compareString1[value] = (compareString1[value] || 0) + 1
        }
        for(let value of str2){
            compareString2[value] = (compareString2[value] || 0) + 1
        }
     // for each keys in the str1 check that if we have that in str2 
        for(let value in compareString1){
            if(!(value in compareString2)){
                  // if not return false 
                return false; 
            }
             // for each value in the str1 check that we have the same value in the str2 
            if(compareString2[value] !== compareString1[value]){
                return false; 
             // if not return false 
            }
        }
          
        
        return true;
     // otherwise return true 

}; 

// console.log(anagram('tawhidabdullah','halldihwatubda')); // true 


function cleanAnagram(str1,str2){

    if(str1.length !== str2.length){
        return false ; 
    }

    const frequencyCounter = {}; 

    for(let i = 0; i < str1.length; i++){
        let letter = str1[i]; 
        frequencyCounter[letter] ? frequencyCounter[letter]++ : frequencyCounter[letter] = 1; 
    }

    for(let j = 0; j < str2.length; j++){
        // get the letter
        let letter = str2[j]; 
        if(!frequencyCounter[letter]){
            return false; 
        }
        else {
            frequencyCounter[letter]--
        }
    }

    console.log(frequencyCounter);

    return true;
}; 


console.log(cleanAnagram('tawhidabdullah','halldihwatubda')); // true 
