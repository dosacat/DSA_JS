//pseudocode - https://www.youtube.com/watch?v=RUUTazjpFWQ
//if arr.length < 1 return arr
//mid = floor(arr.length)/2
//left = mergesort(arr.slice(0,mid))
//right = arr.slice(mid)
// return merge(left,right)
//log N is height of the tree, with N operations on each level (linear)

//merge function

function merge(arr1,arr2){
  let result = []
  let i=0
  let j=0
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i])
      i++
    }
    else{
      result.push(arr2[j])
      j++
    }
  }

    while(i<arr1.length){
      result.push(arr1[i])
      i++
    }

    while(j<arr2.length){
      result.push(arr2[j])
      j++
    }

  return result
}


function mergeSort(array){
    if (array.length === 1) {
    return array;
  }

  var mid = Math.floor(array.length/2)
  var left = mergeSort(array.slice(0,mid))
  var right = mergeSort(array.slice(mid))
  return merge(left,right)  
}


console.log(mergeSort([2,3,1,10,6]))
