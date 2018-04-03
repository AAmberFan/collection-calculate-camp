function create_updated_collection(collection_a, object_b) {
  // var count = {};
  // for (let ele of collection_a) {
  //   if(count[ele]==null){
  //     count[ele] =1;
  //   }else{
  //     count[ele] +=1;
  //   }
  // }
  // var res = [];
  // for(let i in count){
  //   res.push({"key":i, "count":count[i]});
  // }
  // console.log(res);
  // res.forEach(function(ele,index){
  //   if(object_b.value.includes(ele.key)){
  //     let mul= Math.floor( ele.count/3);
  //     ele.count-=mul;
  //   }
  // });
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
//   "d", "d", "d", "d", "d"
// ];
// var object_b = {value: ["a", "d", "e", "f"]};
// console.log(create_updated_collection(collection_a, object_b));
module.exports = create_updated_collection;
