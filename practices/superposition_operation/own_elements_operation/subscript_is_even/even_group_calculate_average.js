'use strict';
var even_group_calculate_average = function(collection){
  var even=[];
  for (let i in collection) {
    if((i%2===1)&&(collection[i]%2===0)){
        even.push(collection[i]);
    }
  }
  if (even.length==0)
  return [0];
  var evenAve = []
  for(let j of even){
    if(evenAve[j.toString().length-1] ==null){
      evenAve[j.toString().length-1] = new Array();
      evenAve[j.toString().length-1].push(j);
    }else{
      evenAve[j.toString().length-1].push(j);
    }
    }
    var res = [];
    for (var k in evenAve) {
      if(evenAve[k] !=null){
        res.push(evenAve[k].reduce(function(pre,cur){
          return pre+cur;
        })/evenAve[k].length);
      }

    }


  return res;
};
function aveFunc(num){
  num.reduce(function(pre,cur){
    return pre+cur;
  })/num.length;
}

module.exports = even_group_calculate_average;
