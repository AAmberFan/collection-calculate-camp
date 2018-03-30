'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var diff = number_b - number_a;
  var sign = diff/Math.abs(diff);
  var result = new Array();
  result.push(letter26(number_a));
  while(number_a!=number_b){
    number_a+=sign;
    result.push(letter26(number_a));
  }
  return result;
}
function letter26(num){
  let letter = new String();
  while(num!=0){
    let did = Math.floor(num/26);
    let mode = num % 26;
    if(mode ===0){
      mode = 26;
      did -= 1;
    }
    letter += String.fromCharCode(mode+96);
    num = did;

    //letter.push(String.fromCharCode(mode+96))
  }
  return letter.split('').reverse().join('');
}
//console.log(get_letter_interval_2(26,27));
module.exports = get_letter_interval_2;
