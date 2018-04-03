'use strict';
var is_exist_element = function(collection,element){
  let flag = false;
  for (let i in collection){
    if((i%2===0)&&(collection[i]===element))
    {
      flag = true;
    }
  }
  return flag;
};
module.exports = is_exist_element;
