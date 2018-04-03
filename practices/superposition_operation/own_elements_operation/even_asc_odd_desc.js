'use strict';
var even_asc_odd_desc = function(collection){
var even = collection.filter(x=>x%2===0);
var uneven = collection.filter(x=>x%2===1);
even.sort(sortAcr);
uneven.sort(sortDec);
return even.concat(uneven);
};

function sortAcr(num1,num2){
  return num1-num2;
}
function sortDec(num1,num2){
  return num2 - num1;
}
// var collection_a = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
// console.log(even_asc_odd_desc(collection_a));
module.exports = even_asc_odd_desc;
