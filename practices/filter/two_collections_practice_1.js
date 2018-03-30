'use strict';

function choose_common_elements(collection_a, collection_b) {
var result = collection_a.filter(v => collection_b.includes(v));
return result;
}
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = ["a", "d", "e", "f"];
//console.log(choose_common_elements(collection_a, collection_b));
module.exports = choose_common_elements;
