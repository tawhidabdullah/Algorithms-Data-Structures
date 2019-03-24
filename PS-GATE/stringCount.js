// =================================================================================================
        // write a function which takes in a string and returns count of each caracter in the string as [{a: 3}]
// =================================================================================================


// inputs : strings
// outputs : output will be an array =>> {a: 1 , b: 2}
// yes 


// function stringCount(str){
//    // make object to return at the end 
//    let object = {}; 
//    // loop over string, for each character 
//    for (let i = 0; i < str.length; i++){
//        let key  = str[i]
//     if(/[a-z0-9]/.test(key)){
//           // if the character is a number/ letter and is a key in object, add 1 to count
//        if(!(object[key] === undefined)){
//         object[key]++; 
//     }
//   // if the charecter is a number/letter and not key in a object , add it to object and set it value to 1
//   if(object[key] === undefined){
//      object[key] = 1; 
//   }
//     }
//    }
//  //  return the object at the end 
//    return object; 
      
//         // if the character is (space,period,etc) don't do anything
     
// }; 





////////////////////               REFACTOR           ////////////////////////////////////



function stringCount(str){
   let object = {}; 

   for (let key of str){
    key = key.toLowerCase();

    if(isAlphaNumeric(key)){
    object[key] = ++object[key] || 1 ; 
    }
   }
   return object;   
}; 





function isAlphaNumeric(character){
    let code = character.charCodeAt(0);

    if
    (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha(A-Z)
        !(code > 96 && code < 123) // loser appah (a-z)

        // the theory is if one get's true , the whole logic get's false and the whole if statements return false 
    )
    {
        return false; 
    }

    return true ; 
}




console.log(stringCount('Tawhid Abdullah 4545 !!!!!!!!!')); 
