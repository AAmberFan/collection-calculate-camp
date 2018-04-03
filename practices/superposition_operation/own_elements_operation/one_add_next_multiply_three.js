'use strict';
function one_add_next_multiply_three(collection){
  var res=[];
let num1;
let num2;
let num;
let index;
  for(let i in collection){
    //console.log(i);
    if(i<(collection.length-1)){
      num1 = parseFloat(collection[i]);
      index = parseInt(i)+1;
      //console.log(index);
      num2 = parseFloat(collection[index]);
      //console.log(num2);
      num = (num1+num2)*3;
      res.push(num);
    //res.push( (parseFloat(collection[i])+parseFloat(collection[i+1])) *3 );
  }
  }
  return res;
}
module.exports = one_add_next_multiply_three;
