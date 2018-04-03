'use strict';

function compute_median(collection) {
  for(let i =0;i<collection.length-1;i++){
    for(let j = 0;j<collection.length-i;j++){
      if(collection[j]>collection[j+1]){
        let t = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = t;
      }
    }
  }
  console.log(collection);
  if(collection.length%2 == 1){
    return collection[Math.floor(collection.length/2)];
  }else{
    if(collection.length%2 == 0){
      return(collection[collection.length/2-1]+collection[collection.length/2])/2;
    }
  }
}
//console.log(compute_median(collection_c));
module.exports = compute_median;
