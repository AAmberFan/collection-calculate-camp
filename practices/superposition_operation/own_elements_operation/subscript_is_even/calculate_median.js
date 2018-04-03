'use strict';
var calculate_median = function(collection){
var uneven = collection.filter(function(ele,index){
  return index%2==1;
});
if(uneven.length%2==1){
  return uneven[Math.floor(uneven.length/2)];
}else{
  return (uneven[uneven.length/2 -1]+uneven[uneven.length/2])/2;
}
}

// var collection_a = [1, 2, 3, 4, 5, 6];
// var collection_b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(calculate_median(collection_b));
module.exports = calculate_median;
