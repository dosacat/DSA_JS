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


