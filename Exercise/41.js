// function palindromeOf3digs(){
//     let x=0;
//     let y=0;
//     ans=x*y;
//     if(x*y===ans.split("").reverse().join()){
//         return x,y;
//     }
// }
// function pali(num) {
//   arrnum = Array.from(num.toString()).map(Number).reverse().join("");
// //   p = Number(arrnum);
//   return num == arrnum;
// }
// console.log(pali(12321));
// function larrgestPalindrome(n){
//     let upper_limit = Math.pow(10, n) - 1;


//     // largest number of n-1 digit.
//     // One plus this number
//     // is lower limit which is
//     // product of two numbers.
//     let lower_limit = 1 +
//     parseInt(upper_limit / 10, 10);
  
//     // Initialize result
//     let max_product = 0;
      
//     for (let i = upper_limit; i >= lower_limit; i--){
//         for (let j = i; j >= lower_limit; j--){
//             // calculating product of two
//             // n-digit numbers
//             let product = i * j;
//             if (product < max_product)
//                 break;
//             let number = product;
//             let reverse = 0;
  
//             // calculating reverse of product
//             // to check whether it is
//             // palindrome or not
//             while (number != 0){
//                 reverse = reverse * 10 + number % 10;
//                 number = parseInt(number / 10, 10);
//             }
  
//             // update new product if exist and if
//             // greater than previous one
//             if (product == reverse &&
//             product > max_product)
//                 max_product = product;
//         }
//     }
//     return max_product;
// }
 
// console.log(larrgestPalindrome(2))
function ch(mn,mx){
let ans = 0;
for (i = mn; i <= mx; i ++) {
    for (j = mn; j <= mx; j ++) {
        let num = i * j;
        let s = String(num);
        let rs = s.split('').reverse().join('');
        if (s === rs) {
            ans = Math.max(ans, num);
        }
    }
}return ans;
}
 
console.log(ch(10,99));
// console.log(Math.max("23","55"))