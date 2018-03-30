'use strict';

function choose_no_common_elements(collection_a, collection_b) {
var resulta = collection_a.filter(v => !collection_b.includes(v));
var resultb = collection_b.filter(v => !collection_a.includes(v));
return resulta.concat(resultb);
}
// var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
// var collection_b = ["a", "d", "e", "f"];
//
// console.log(choose_no_common_elements(collection_a, collection_b));

module.exports = choose_no_common_elements;
