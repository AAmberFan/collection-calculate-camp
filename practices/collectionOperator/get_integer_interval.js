'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var diff = number_b - number_a;
  var sign = diff/Math.abs(diff);
  var result = new Array();
  result.push(number_a);
  while(number_a!=number_b){
    number_a +=sign;
    result.push(number_a);
  }
return result;
}
// console.log(get_integer_interval(5,1))
module.exports = get_integer_interval;
