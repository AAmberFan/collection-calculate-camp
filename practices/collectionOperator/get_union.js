'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = collection_a.concat(collection_b.filter(v => !collection_a.includes(v)));
  return result;
}
// var collection_a = [10, 27, 28, 19, 5];
// var collection_b = [5, 78, 28, 19, 23];
// console.log( get_union(collection_a, collection_b) );
module.exports = get_union;
