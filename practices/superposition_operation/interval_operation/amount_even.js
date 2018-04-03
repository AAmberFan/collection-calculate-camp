'use strict';

function amount_even(collection) {
var num=collection.reduce(function(pre,cur){
  if(cur%2===0){
    return pre+cur;
  }else{
    return pre;
  }
},0);
return num;
}

module.exports = amount_even;
