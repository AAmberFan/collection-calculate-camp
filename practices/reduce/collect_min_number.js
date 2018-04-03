'use strict';

function collect_min_number(collection) {
  return collection.reduce(function(pre,cur){
    var min = pre>cur?cur:pre;
    return min;
  });
}

module.exports = collect_min_number;
