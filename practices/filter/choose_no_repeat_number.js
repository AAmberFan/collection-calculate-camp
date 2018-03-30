'use strict';

function choose_no_repeat_number(collection) {
  var mySet = new Set(collection);
  let result =[];
  mySet.forEach(x => result.push(x));
  return result;
}
// var collection = [1, 1, 1, 2, 2, 3, 4];
// console.log(choose_no_repeat_number(collection));
module.exports = choose_no_repeat_number;
