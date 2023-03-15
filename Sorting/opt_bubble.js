var arr1 = [1,4,1,2,11,22,21,55,45]

function bbs(arr){
  var swap = false
  for(let i=0;i<arr.length-1;i++){
    for(let j=0; j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swap=true
      }
    }
    if(swap===false){
      break
    }
    
  }
  return arr
}

console.log(bbs(arr1))
