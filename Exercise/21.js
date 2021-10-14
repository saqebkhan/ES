
// function sums(digits){
//   arrDigs=Array.from(digits.toString()).map(Number)
//   let sum=0
//   arrDigs.forEach((element)=>sum+=element)
//   return sum;
// }
// console.log(sums(234))

function addem(nums){
  arrNum=Array.from(nums.toString()).map(Number)
  ans=0
  arrNum.forEach((element)=>{
    ans=ans+element;
  })
  return ans;
}
console.log(addem(78099))
