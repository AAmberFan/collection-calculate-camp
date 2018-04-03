'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(sortAcr);
  console.log(collection);
  let threeArr = [];
  let res=[];
  let i =0;
  while(collection.length>3){
    threeArr.push(collection[i+1]);
    threeArr.push(collection[i+2]);
    threeArr.push(collection[i]);
    res = res.concat(threeArr);
    collection.splice(0,3);
    threeArr = [];
  }
  res = res.concat(collection);
  return res;
}
function sortAcr(num1,num2){
  return num1-num2;
}
// var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
// console.log(rank_by_two_large_one_small(collection_a));
module.exports = rank_by_two_large_one_small;
