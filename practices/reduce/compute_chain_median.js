'use strict';

function compute_chain_median(collection) {
  collection = collection.split("->").map(x => x-'0');
  for(let i =0; i<collection.length-1;i++){
    for(let j = 0; j<collection.length-i;j++){
      if(collection[j]>collection[j+1]){
        let temp = collection[j];
        collection[j] = collection[j+1];
        collection[j+1] = temp;
      }
    }
  }

  if(collection.length%2 == 1){
    return collection[Math.floor(collection.length/2)];
  }else{
    if(collection.length%2 == 0){
      return(collection[collection.length/2-1]+collection[collection.length/2])/2;
    }
  }
}


module.exports = compute_chain_median;
