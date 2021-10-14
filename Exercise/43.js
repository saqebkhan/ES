function diff(n){
  let sumOfSquare = 0;
  let squareOfsum = 0;
  let sum = 0;
  for (i=0; i<=n; i++){
    sumOfSquare = sumOfSquare + i**2;
    // console.log(sum);
    sum = sum + i;
    squareOfsum = sum**2
  }return squareOfsum - sumOfSquare;
}
console.log(diff(10));


// function sumOfNatural(number) {
//   var sumOfSquare = 0;
//   var squareOfSum = 0;
//   var sum = 0;
//   for (i = 0; i <= number; i++) {
//     var sumOfSquare = sumOfSquare + i ** 2;
//     var sum = sum + i;
//     var squareOfSum = sum ** 2;
//   }
//   return squareOfSum - sumOfSquare;
// }
// console.log(sumOfNatural(100));
