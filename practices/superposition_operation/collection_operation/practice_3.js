'use strict';

function hybrid_operation_to_uneven(collection) {
  var uneven = collection.filter(x => x%2 ===1);

return uneven.reduce(function(pre,cur){
  return pre + cur*3 +5;
},0);
}
module.exports = hybrid_operation_to_uneven;
