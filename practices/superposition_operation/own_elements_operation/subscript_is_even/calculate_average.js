'use strict';
var calculate_average = function(collection){
  var sum = 0;
  var num = 0;
  for (var i in collection) {
    if(i%2===1){
      sum+=collection[i];
      num++;
  }
  }
  var ave  = parseFloat( sum/num);
  return ave;
}
// var collection_a = [1, 2, 3, 4, 5, 6];
// console.log(calculate_average(collection_a));
module.exports = calculate_average;
