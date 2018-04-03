'use strict';

function median_to_letter(collection) {
  var medNum = Math.ceil(collection.length/2);
  var result =  numToLetter(collection[medNum]);
  return result;
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
    num =did;
    res += String.fromCharCode(mode+96);

  }
  res=res.split("").reverse().join("");
  return res;
}

// var collection = [20,21,22,23,24,25,26,27,28,29,
//                   30,31,32,33,34,35,36,37,38,39,
//                   40,41,42,43,44,45,46,47,48,49,
//                   50,51,52,53];
// console.log(median_to_letter(collection));
module.exports = median_to_letter;
