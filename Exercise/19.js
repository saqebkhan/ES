// function mul(x,y){
//     for(i=1; i<x.value; i++)
//     console.log(i+y)

// }

// mul(2,8)
// for(i=0; i<5; i++)
// console.log(i)

// function multiply(a, b){
//     let answer = a
//     for( i = 0; i < b-1 ; i++){
//       answer =answer + a
//     }
//     return answer
//   }
  // console.log(multiply(2,4))

function multi(a, b) {
  let ans = a;
  for (i = 0; i < b - 1; i++) {
    ans = ans + a;
  }
  return ans;
}
console.log(multi(2, 4));
