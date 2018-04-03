'use strict';

function compare_collections(collection_a, collection_b) {
  return JSON.stringify(collection_a.sort())===JSON.stringify(collection_b.sort());
}

module.exports = compare_collections;
