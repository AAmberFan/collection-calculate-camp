'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function(pre,cur){
    return pre+cur;
  })
}

module.exports = calculate_elements_sum;
