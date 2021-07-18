
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
console.log(CollectionSumOfEven([5,2,7,9,10,8,17,115,10]));