'use strict';
var rank_asc = function(collection){
  //return [6,5,4,3,2];
  var result = collection.sort().reverse();
  return result;
};
// var collection_a = [3, 2, 4, 5, 6];
// console.log(rank_asc(collection_a));
module.exports = rank_asc;
