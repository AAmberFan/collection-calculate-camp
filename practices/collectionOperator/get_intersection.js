'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = collection_b.filter(v => collection_a.includes(v));
  return result;
}
var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
//console.log(get_intersection(collection_a, collection_b));

module.exports = get_intersection;
