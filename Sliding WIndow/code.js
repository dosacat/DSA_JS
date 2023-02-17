// Note: To identify the sliding window questions the word Consecutive/Contiguous is the biggest clue to crack the problem.



//BRUTE FORCE O(N^3)
function unique(str,num){
  an=0
  for (let i=0; i<str.length;i++){
    for(let j=str.length; j>i;j--){
      let distinct= new Set()
      for (let x = i; x < j; x++) {
        distinct.add(str.charAt(x));
      }
      
      if (distinct.size===num){
        an=Math.max(an,j-i)
      }
    }
  }
  return console.log(an)
}

unique("aaabdsdhs",3)

//Sliding window to replace nesting of two loops into one loop. Reduces time complexity from O(N^2) to O(N).

//There are 2 variations in the technique:-  
//* Fixed size window.  
//* Variable size window.

//Largest sum of sub-arrays. Fixed size window.
function maxSumArr(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
  
  // find initial sum of first k elements
    for(let i = 0; i < num; i++) {
       tempSum += arr[i];
    }
    maxSum = tempSum;
  // iterate the array once
  // and increment the right edge
    for(let i = num; i < arr.length; i++) {
      
      // compare if sum is more than max,
      // if yes then replace
      // max with new sum value
       tempSum = tempSum - arr[i - num] + arr[i];
       maxSum = Math.max(tempSum, maxSum);
       }      
       return maxSum;
}

// Variable size window. Dynamic sizing, find the least array length of sum num.

function minSubArrayLen(arr, num) {
  var start=0
  var end =0
  var sum=0
  var minLen=Infinity
  
// while window's trailing edge has NOT reached the end of the array
  while(start<arr.length){

    // if window's leading edge has NOT reached the end of the array
    // AND window's values do NOT add up to num, grow window to right 
    if(sum<num && end<arr.length){
      // increase sum by the value at window's leading edge
      sum+=arr[end]
      // increment window's leading edge to grow window
      end++
    }
       // if window's values DO add up to AT LEAST num, shrink window from left
      // update smallest subarray length to the lesser of current minLen or window's length
    else if(sum>num){
      minLen = Math.min(minLen, end - start)

       // decrease sum by the value at window's trailing edge
      sum-=arr[start]
      // increment window's trailing edge to shrink window
      start++
    }
    else {
      // current sum is less than num, BUT window's leading edge HAS reached end of array
      // needed to prevent an infinite loop 
      break
    }
  }
  return minLen === Infinity ? 0 : minLen
}




console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0

