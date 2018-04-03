function collect_same_elements(collection_a, object_b) {
  var bArr = object_b.value;
  return collection_a.filter(x=> bArr.includes(x));
}

module.exports = collect_same_elements;
