'use strict';

function calculate_elements_sum(collection, element) {
  if(!collection.includes(element)){
    return null;
  }
  for(let i in collection){
    if(collection[i]===element){
      return i-'0';
    }
  }
}
module.exports = calculate_elements_sum;
