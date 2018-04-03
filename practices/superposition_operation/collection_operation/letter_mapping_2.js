'use strict';

function average_to_letter(collection) {
// var ave = Math.floor(collection.reduce(function(pre,cur){
//   return pre+cur;
// })/collection.length);
// return numToLetter(ave);
}
// function numToLetter(num){
//   let mode;
//   let did;
//   let res = ''
//   while(num>0){
//     mode = num %26;
//     did = Math.floor(num/26);
//     if(mode ===0){
//       did-=1;
//       mode = 26;
//     }
//     res += String.fromCharCode(mode+96);
//     res=res.split("").reverse().join("");
//   }
//   return res;
// }
module.exports = average_to_letter;
