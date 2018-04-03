function collect_same_elements(collection_a, collection_b) {
  var bArr = [];
  for(let i of collection_b){
    bArr = bArr.concat(i);
  }
  return collection_a.filter(x => bArr.includes(x));
}

module.exports = collect_same_elements;
