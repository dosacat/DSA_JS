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

There are 2 variations in the technique:-  
* Fixed size window.  
* Variable size window.  

//Largest sum of sub-arrays. Fixed size window.
function maxSumArr(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
       tempSum += arr[i];
    }
    maxSum = tempSum;
    for(let i = num; i < arr.length; i++) {
       tempSum = tempSum - arr[i - num] + arr[i];
       maxSum = Math.max(tempSum, maxSum);
       }      
       return maxSum;
}


