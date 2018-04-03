'use strict';

function double_to_one(collection) {
  var res = [];
  for(let i of collection){
    res = res.concat(i);
  }
  var mySet = new Set(res);
  var res2 = [];
  for( let j of mySet){
    res2.push(j);
  }
  return res2;
}

module.exports = double_to_one;
