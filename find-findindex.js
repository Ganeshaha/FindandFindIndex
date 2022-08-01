/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {

return usersArray.find(function(value, index, passedArray){
if(value.username === username){
  return true;
}
});


}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let tempObj ={};
  let foundBool = false;
  let objIndex = -1;
  objIndex = usersArray.findIndex(function(value, index, passedArray){
   
    if(value.username === username){
      tempObj = value;
      foundBool = true;
      
      return true;
    }
    });
    
    if(foundBool){
      usersArray.splice(objIndex,1);
    return tempObj;
    }
    else return undefined;
    


}