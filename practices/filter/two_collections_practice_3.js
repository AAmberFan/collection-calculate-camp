'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = collection_a.filter(function(element){
    for(let i of collection_b){
      if(element%i===0)
      return element;

    }
  } );
  return result;
}
// var collection_a = [4,7,9,25,16,21,64,32,35,49];
// var collection_b = [2,3,5];
// console.log(choose_divisible_integer(collection_a, collection_b));
module.exports = choose_divisible_integer;
