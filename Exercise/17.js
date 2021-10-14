// function swap(n) {
//   return n.split("").reverse().join("");
   
// }
// console.log(swap("19"));

function Swap(num){
  arrNum=Array.from(num.toString()).map(Number)
  ans=arrNum.reverse().join("");
  return ans;
}
console.log(Swap(12))