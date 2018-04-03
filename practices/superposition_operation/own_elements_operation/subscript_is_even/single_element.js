'use strict';
var single_element = function(collection){
  var even = [];
  for (let i in collection) {
    if(i%2==1){
      even.push(collection[i]);
    }
  }

  return even.filter(function(element,index,arr){
    return arr.indexOf(element)===arr.lastIndexOf(element);
  });
};
module.exports = single_element;
