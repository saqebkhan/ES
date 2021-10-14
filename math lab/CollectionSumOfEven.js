
const CollectionSumOfEven=(Numbers) => {
    let sumEven = 0;
    let sumOdd = 0;
    Numbers.forEach((element) => {
         element % 2 == 0
         ? (sumEven = sumEven+ element)
         : (sumOdd = sumOdd + element);
    });
    return `Sum Of The Even Numbers are ${sumEven} and Sum of Odd Numbers are ${sumOdd}
Total Sum =${sumEven +sumOdd}`;
};
console.log(CollectionSumOfEven([1,2,3,4,5,6,7,8]));

// const pure =(akde)=>{
//    let evenKaSum=0;
//    let oddKaSum=0;
//     akde.forEach ( element => {
//         element % 2 == 0
//         ? (evenKaSum = evenKaSum + element)
//         : (oddKaSum = oddKaSum + element);
//     });
// return `sum of odd are ${oddKaSum} and even ${evenKaSum} and total is ${evenKaSum+oddKaSum}`;
// }
// console.log(pure([1,2,3,4,5]));


// const findSumOfEvennOdd =(adaad)=>{
//     let evenkijama = 0;
//     let oddkijama = 0;
//     adaad.forEach(element => {
//         element % 2 == 0 
//         ? (evenkijama = evenkijama + element)
//         : (oddkijama = oddkijama + element);

//     });
//     return `kul even are ${evenkijama} aur kul odd ki jama are ${oddkijama} aur sab milake ye hota hai ${evenkijama + oddkijama}`


// }
// console.log(findSumOfEvennOdd([1,2,3,4,5,6,7,8,9]))


// const evenfinder =(number1,number2)=>{
//     if(number1>number2){
//         return number1
//     }
//     else {
//         return number2
//     }
// }
// console.log(evenfinder(2,-3))



