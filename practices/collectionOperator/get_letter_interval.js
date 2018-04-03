'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var diff = number_b - number_a;
  var sign = diff/Math.abs(diff);
  //console.log(sign);
  var result = new Array();

  number_a += 96;
  number_b += 96;
  result.push(String.fromCharCode(number_a));
//console.log(result);
  while(number_a!=number_b){
    number_a +=sign;
    result.push(String.fromCharCode(number_a));
  }
  return result;
  // console.log(result);
}
// var collection_a = ['a', 'b', 'c', 'd', 'e'];
// var collection_b = ['e', 'd', 'c', 'b', 'a'];
// console.log(get_letter_interval(5,1));
module.exports = get_letter_interval;
