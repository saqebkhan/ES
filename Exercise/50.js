// function possib(num) {
//   arrNum = Array.from(num.toString());
//   if (arrNum.length == 2) {
//     console.log(num, Number(arrNum.reverse().join("")));
//   } else if (arrNum.length == 3) {
//     console.log(
      
//     );
//   }
// }
// console.log(possib(23));


function ch(num){
    arrNum = Array.from(num.toString());
    a = Number(arrNum[1] + arrNum[0] + arrNum[2]),
    b = Number(arrNum[2] + arrNum[0] + arrNum[1]),
    c = Number(arrNum[1] + arrNum[2] + arrNum[0]),
    d = Number(arrNum[0] + arrNum[2] + arrNum[1]),
    e = Number(arrNum.reverse().join(""));
    f = num;
    total = 0;
    for(i=0; i<num; i++){
        if(num%i !== 0){
            // total+=i;
            console.log(num%i)
        }
    }return total;
}
console.log(ch(100))
 

