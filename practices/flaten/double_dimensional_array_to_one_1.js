'use strict';

function double_to_one(collection) {
  var res = [];
  for(let i of collection){
    res = res.concat(i);
  }
  return res;
  //return Array.prototype.concat.apply([],collection);
}
module.exports = double_to_one;
