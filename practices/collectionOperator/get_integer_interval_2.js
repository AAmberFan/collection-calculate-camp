'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = new Array();
  var diff = number_b - number_a;
  if(diff === 0){
    if(number_a%2===0){
    return [number_a];
  }
    else{
      return result;
    }
  }
  var sign = diff/Math.abs(diff);

  if(number_a%2 ==1){
    number_a += sign;
  }
  if(number_b%2 == 1){
    number_b-=sign;
  }


  result.push(number_a);
  while(number_a!=number_b){
    number_a +=sign*2;
    result.push(number_a);
  }
return result;
}
// var collection_a = [2, 4, 6, 8, 10];
//   var collection_b = [10, 8, 6, 4, 2];
//   console.log(get_integer_interval_2(10,10));
module.exports = get_integer_interval_2;
