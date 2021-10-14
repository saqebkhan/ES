const factorial=(number)=>{

    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
return fact
}
console.log(factorial(7))


// const factorial = (num)=>{
//     for (i = num -1; i>0; i--){
//     num= num * i

// }
//     return num;
// }
// console.log(factorial(7))


// const facto=(n)=> n < 2 ? 1 : n*facto(n-1)
// console.log(facto(5))

