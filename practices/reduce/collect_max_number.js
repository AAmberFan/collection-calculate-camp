'use strict';

function collect_max_number(collection) {
  return collection.reduce(function(pre,cur){
    let max = pre>cur?pre:cur;
    return max;
  })
}

module.exports = collect_max_number;
