'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var diff = number_b - number_a;

  var sign = diff/Math.abs(diff);
  var result = new Array();

  number_a += 96;
  number_b += 96;
  result.push(String.fromCharCode(number_a));

  while(number_a!=number_b){
    number_a +=1;
    result.push(String.fromCharCode(number_a));
  }
  return result;
  // console.log(result);
}
module.exports = get_letter_interval;
