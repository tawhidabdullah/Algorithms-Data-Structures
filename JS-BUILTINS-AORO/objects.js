const mySelf = {
    name : 'Tawhid Abdullah',
    passion : ['programming','learning','making parents proud'],
    isGreat : true,
}; 


// ==> O(n) -> because when it finds out the property, it doesn't go till end of the loop 
function hasOwnProperty(mySelf , property){ 
   for (objectkeys in mySelf){
      if(objectkeys === property){
          return true; 
      }
   }

   return false; 
}


const propertiesOfMyself = Object.keys(mySelf); // ==> O(n)
const valuesOfMyself = Object.values(mySelf); // ==> O(n)
const entrisOfMyself = Object.entries(mySelf); // ==> o(n) 
// const hasPropertyofMyself = mySelf.hasOwnProperty('ame'); 
console.log(hasOwnProperty(mySelf, 'nme'));