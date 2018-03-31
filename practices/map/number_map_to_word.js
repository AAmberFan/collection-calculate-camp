'use strict';
var number_map_to_word = function(collection){
  //return ['a','b','c','d','e'];
  var result = collection.map(function(element){
    let num='';
    while(element!=0){
      let did = Math.floor(element/26);
      let mode = element%26;
      if(mode ===0){
        mode = 26;
        did-=1;
      }
      num+=String.fromCharCode(mode+96);
      element = did;
    }
    return num.split('').reverse().join('');
  });
  return result;
};

module.exports = number_map_to_word;
