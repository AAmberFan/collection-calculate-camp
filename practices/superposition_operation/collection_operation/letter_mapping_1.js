'use strict';

function even_to_letter(collection) {
   var res = [];
  for (let ele of collection) {
    if(ele%2===0){
      res.push(numToLetter(ele));
    }
  }
  return res;
}
function numToLetter(num){
  let mode;
  let did;
  let res = ''
  while(num>0){
    mode = num %26;
    did = Math.floor(num/26);
    if(mode ===0){
      did-=1;
      mode = 26;
    }
    num = did;
    res += String.fromCharCode(mode+96);}

    res=res.split("").reverse().join("");

  return res;
}
module.exports = even_to_letter;
