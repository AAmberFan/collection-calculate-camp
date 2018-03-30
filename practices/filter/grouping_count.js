'use strict';

function grouping_count(collection) {
  var result = {};
  collection.forEach(function(element){
    if(result[element]==null){
      result[element] = 1;
    }else {
      result[element]+=1;
    }
  });
  return result;
  //在这里写入代码
}
// var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
// console.log(grouping_count(collection));
module.exports = grouping_count;
