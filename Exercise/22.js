// function palindrome(str){
//     return str === str.split("").reverse().join("")
// }
// console.log(palindrome("khan"))

// function pali(num){
//     arrNum=Array.from(num.toString()).map(Number).reverse().join('')
//     return num===arrNum;
// }
// console.log(pali(12321))

function pali(number){
    arrNumber=Array.from(number.toString()).map(Number).reverse().join('')
    paled=Number(arrNumber);
    return paled === number;
}
console.log(pali(23432));
