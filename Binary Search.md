  const arr = [1,2,3,4,5,6]
  
  * First and Last Index in sorted Array  
  * Find Peak 
  * First Bad Version 

Binary Search has Time Complexity of O(logN)
Space Complexity O(1)
  
  ITERATIVE METHOD:  
  
      function find(x){
        var start=0;
        var end=arr.length-1

        while(start<=end){

          let mid = Math.floor((start + end) / 2);

          if(arr[mid]==x){
            return mid
          }
          else if(arr[mid]>x){
            end=mid-1
          }
          else{
            start=mid+1
          }
        }
        return -1
      }

      console.log(find(2))

