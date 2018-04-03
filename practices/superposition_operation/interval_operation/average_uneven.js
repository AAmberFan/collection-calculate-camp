'use strict';

function average_uneven(collection) {
  var uneven = collection.filter(x => x%2 ===1);
  return uneven.reduce(function(pre,cur){
    return pre+cur;
  })/uneven.length;
  }


module.exports = average_uneven;
