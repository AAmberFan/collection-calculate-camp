function count_same_elements(collection) {
  var res = [];
  var mySet = {};
  collection.forEach(function(i){
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
    res.push({"name":j,"summary":mySet[j]});
  }
   return res;

}
// var collection = [
//   "a", "a", "a",
//   "e", "e", "e", "e", "e", "e", "e",
//   "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
//   "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
//   "f", "f", "f", "f", "f", "f", "f", "f", "f",
//   "c:8",
//   "g", "g", "g", "g", "g", "g", "g",
//   "b", "b", "b", "b", "b", "b",
//   "d-5"
// ];
// console.log(count_same_elements(collection));
module.exports = count_same_elements;
