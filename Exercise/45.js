// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 21000?



// var a = 2** 1000;
// arrA = Array.from(a.toString()).map(Number)
// let sum =0;
// arrA.forEach((element)=>sum = sum +element);
// console.log(sum);   

////////////////////////////////////////////////////////////////////////
number = String(2**1000);
res = 0;
for (digit of number){
    res = res + Number(digit);
}
console.log(res);
//////////////////////////////////////////////////////////////////////////
// function solution() {
//     var order = 0;
//     var digits = Math.floor(1 + 1000 * Math.LN2 / Math.LN10);

//     var number = new Uint8Array(digits);

//     number[0] = 1;

//     for (var i = 0; i < 1000; i++){

//         var carry = 0;

//         for (var j = 0; j <= order; j++){

//             var product = 2 * number[j] + carry;
//             // console.log(product)
//             number[j] = product % 10;
//             carry = product / 10 | 0;

//             if (j === order && carry > 0) {
//                 order++;
//             }
//         }
//     }
//     return number.reduce((a, b) => a + b, 0);
// }
// console.log(solution());