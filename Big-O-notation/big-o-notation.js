console.log('get a life /////////////////////////////>>>>>>'); 




// REVERSE A STRING 
function reverseString(str){ // this is  as BIG O NOTATION =>>>             O(n) 
    let reversedString = '';  
    for (let i = str.length -1 ; i >= 0; i--  ){
       reversedString += str[i]; // add this current string to reversedString 
    }
    return reversedString; 
}
// console.log(reverseString('halludbA dihwaT')); 




// SUM OF ALL NUMBER FROM 1 TO N WITH ==============>> O(1); 
function sumOfAllFrom1ToNwithconstantN(n){ // this is  as BIG O NOTATION =>>>    O(1)  
   return n * (n + 1) / 2; 
}
// console.log(sumOfAllFrom1ToNwithconstantN(2)); 





// SUM OF ALL NUMBERS FROM 1 TO N 
function sumOfAllFrom1ToN(n){
    let sum = 0; 
    for (let i = 0; i <= n; i++){ // this is  as BIG O NOTATION =>>>      O(n) 
        sum += i; 
    }
    return sum; 
}
// console.log(sumOfAllFrom1ToN(6)); 


console.log(log === log); 