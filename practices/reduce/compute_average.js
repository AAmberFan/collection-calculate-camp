'use strict';

function compute_average(collection) {
  //在这里写入代码
  return collection.reduce(function(pre,cur){
    return pre+cur;
  })/(collection.length);
}

module.exports = compute_average;
