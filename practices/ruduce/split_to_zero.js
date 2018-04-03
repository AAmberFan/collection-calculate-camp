'use strict';

function spilt_to_zero(number, interval) {
  var result = [number];
  while (number>0) {

    number -= interval;
  //  number = number.toFixed(1)
    number=parseFloat(number.toPrecision(1));
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
