// take in array, left and right as paramter.
// pick a pivot element


function findPivot(nums,left,right){
  let p = right
  let j=left
  let i=left-1

  while(j<=p){
    if(nums[j]<p){
      i++
      [nums[i],nums[j]]=[nums[j],nums[i]]
      j++
    }
    else{
      j++
    }
  }

  i++
  [nums[i],nums[p]]=[nums[p],nums[i]]
  return i
}

function quicksort(arr,left=0,right=arr.length-1){

  if(left<right){
    var pivot = findPivot(arr,left,right)
    quicksort(arr,left,pivot-1)
    quicksort(arr,pivot+1,right)
  }
  return arr
}

console.log(quicksort([2,44,1]))
