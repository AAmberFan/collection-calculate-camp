'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var diff = number_b - number_a;

  var sign = diff/Math.abs(diff);
  if(number_a%2 ==1){
    number_a += sign;
  }
  if(number_b%2 == 1){
    number_b-=sign;
  }
  var result = new Array();
  result.push(number_a);
  while(number_a!=number_b){
    number_a +=sign*2;
    result.push(number_a);
  }
return result;
}
// var a = get_integer_interval_2(10, 1);
// console.log(a);
module.exports = get_integer_interval_2;
