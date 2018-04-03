function create_updated_collection(collection_a, object_b) {
  var res = [];
  var mySet = {};
  collection_a.forEach(function(i){
     var ele = i.split(/[:\-\[\]]/);
     //console.log(ele);
      if(mySet[ele[0]]==null){
        mySet[ele[0]] = (ele.length === 1)? 1:parseInt(ele[1]);
      }
      else{
        mySet[ele[0]]+=(ele.length === 1)? 1:parseInt(ele[1]);
      }
    });
  //console.log(mySet);
  for(let j in mySet){
    res.push({"key":j,"count":mySet[j]});
  }

  res.forEach(function(ele){
    if(object_b.value.includes(ele.key)){
      let mul= Math.floor( ele.count/3);
      ele.count-=mul;
    }
  });
  return res;
}
// var collection_a = [
//   "a", "a", "a",
//   "e", "e", "e", "e", "e", "e", "e",
//   "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
//   "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
//   "f", "f", "f", "f", "f", "f", "f", "f", "f",
//   "c", "c", "c", "c", "c", "c", "c", "c",
//   "g", "g", "g", "g", "g", "g", "g",
//   "b", "b", "b", "b", "b", "b",
//   "d-5"
// ];
//
//
// var object_b = {value: ["a", "d", "e", "f"]};
// console.log(create_updated_collection(collection_a, object_b));
module.exports = create_updated_collection;
