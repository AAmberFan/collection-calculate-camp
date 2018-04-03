
function count_same_elements(collection) {
var res = [];
var mySet = {};
collection.forEach(function(i){
  if(mySet[i]==null){
    mySet[i] = 1;
  }
  else{
    mySet[i]+=1;
  }
});
console.log(mySet);
for(let j in mySet){
  res.push({"key":j,"count":mySet[j]});
}
 return res;
}

module.exports = count_same_elements;
