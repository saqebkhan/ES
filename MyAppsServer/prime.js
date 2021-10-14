// const isPrime=(num)=>{
//     // const boundry=
//     for(i=2; i< num / 2; i++){
//         if( num % i === 0) {
//             return "is Composite"
//         }
//     }
//     return "is Prime"

// }

// console.log(isPrime(21))

function isPrime(num) {
    if(num < 2) return "composite";
  
    for (i=2; i<num; i++){
      if(num % i==0){
        return "Prime";
      }
    }
    return "Prime";
  }
console.log(isPrime(2))
