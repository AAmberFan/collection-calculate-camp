'use strict';
var number_map_to_word_over_26 = function(collection){
  //return ['a','m','aa','ad','y','aa'];
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
//   var collection_a = [1, 13,26, 27, 30, 25, 27];
//   console.log(number_map_to_word_over_26(collection_a));
 module.exports = number_map_to_word_over_26;
