// function Armstrong(number){
//     arrnumber=number.split("")
//     arrnumber.forEach((element)=>{
//         element=element*element*element;
//         if(element+element+element==number){console.log("yes")}console.log("no");
//         console.log(element)
        
//     })
    
// }
// console.log(Armstrong("32"))
// function arm(num){
//     arrNum=Array.from(num.toString()).map(Number)
//     let sum=0
//     let mult=1
// // for(i=0; i<arrNum; i++){
// //     console.log(i)
// // }
//     // return mult;
//     arrNum.forEach((element)=>{
//         mult+=element*element*element;
//         sum+=element+element+element;
//     })
//     if(mult==sum+mult){return true}return false;
// }
// console.log(arm(371))



// function arm(num){
//     numDigs=num.length
//     return numDigs;
//     // sum=0;
//     // for(i=0; i<numDigs; i++){
//     //     sum+=Math.pow(num.charAt(i),numDigs);

//     // }
//     // if(sum==num){
//     //     return true;
//     // }return false;

// }
// console.log(arm(371))

// var number = prompt("Enter a number");
// var numberOfDigits = number.length;
// var sum = 0;

// for (i = 0; i < numberOfDigits; i++) {
//   sum += Math.pow(number.charAt(i), numberOfDigits);
// }
 
// if (sum == number) {
//   alert("The entered number is an Armstrong number.");
  
// } else {
//   alert("The entered number is not an Armstrong number.");
// }
function arm(num){
    arrNum=Array.from(num.toString()).map(Number)   
    numDigs=arrNum.length;
    let sum =0

    for(i=0; i<numDigs; i++){
        sum += Math.pow(num.charAt(i),numDigs)
    }
    if(sum==num){
        return true;
    }return false;
}
console.log(arm(371));
