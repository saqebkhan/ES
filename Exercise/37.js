// function onedigit(number){
//     arrnumber=number.split("")
//     if(arrnumber[0]==1){
//         return true;
//     }return false;
    
// }
// console.log(onedigit("12"))

// function reightMost(number){
//     arrNum=Array.from(number.toString()).map(Number).reverse()
//     if(arrNum[0]===1){return true}return false

// }
// console.log(reightMost(23213))

function hasOne(n){
  while(n%10!=0||n==10){
    if(n%10 == 1)
      return true;
    else
      n/=10;
  }  
  
  return false;  
}
console.log(hasOne())