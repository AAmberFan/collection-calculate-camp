function collect_same_elements(collection_a, object_b) {
  var aArr = [];
  for (let i of collection_a) {
    aArr.push(i.key);
  }
  var bArr = object_b.value;
  return aArr.filter(x=> bArr.includes(x));
}

module.exports = collect_same_elements;
