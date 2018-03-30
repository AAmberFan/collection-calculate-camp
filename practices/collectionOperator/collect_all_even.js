'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var collection_b = new Array();
  for(let i of collection){
  	if(i%2==0){
  		collection_b.push(i)
  	}

  }
  return collection_b
}
// var collection_a = [1, 2, 3, 4, 5];
// var collection_b = [2, 4];
// console.log(collect_all_even(collection_a,collection_b))

module.exports = collect_all_even;
