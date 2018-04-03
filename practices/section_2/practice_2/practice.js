function count_same_elements(collection) {
  var res = [];
  var mySet = {};
  collection.forEach(function(i){
    if(!i.includes("-")){
      if(mySet[i]==null){
        mySet[i] = 1;
      }
      else{
        mySet[i]+=1;
      }
    }else{
      let arr = i.split("-");
      mySet[arr[0]]=parseInt(arr[1]) ;
    }

  });
  console.log(mySet);
  for(let j in mySet){
    res.push({"key":j,"count":mySet[j]});
  }
   return res;

}
// var collection = [
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
// console.log(count_same_elements(collection));
module.exports = count_same_elements;
