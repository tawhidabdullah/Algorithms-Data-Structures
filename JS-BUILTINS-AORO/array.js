console.log('array should be use when i want something to be  ordered'); 

const array = ['Tawhid', 'The Great Tawhid', 'destiny','genius']; 

// INSERTING ITEM IN THE FRONT OF AN ARRAY CAN BE VERY COSLY BECAUSE, AFTER THAT EVERY ITEM'S INDEX WILL HAVE
// RE INDEXED;
// AND SAME WITH REMOVING  AN ITEM IN FRONT OF AN ARRRAY 

// NOTE: ==>> WE SHOULD AVOID THEM BOTH 
array.unshift('Tawhid'); 
array.shift('Tawhid'); 
// console.log(array); 


