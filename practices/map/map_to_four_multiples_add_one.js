'use strict';
var map_to_four_multiples_add_one = function(collection){
  //return [5,9,13,17,21];
  return collection.map(v =>v*4+1);
};
// var collection = [1, 2, 3, 4, 5];
// console.log(map_to_four_multiples_add_one(collection));
module.exports = map_to_four_multiples_add_one;
