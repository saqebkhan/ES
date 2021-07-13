//function BiggerNum(num1, num2){
    //if(num1>num2){
      //  return num1;
    //}else{
  //      return num2;
  //  }
//}

//console.log(`Bigger Number is ${BiggerNum(838,1924)}`);
//console.log(`Bigger Number is ${BiggerNum(973,19494)}`);
//console.log(`Bigger Number is ${BiggerNum(13,13.000000000000001)}`);
//console.log(`Bigger Number is ${BiggerNum(7849,498)}`);
//console.log(`Bigger Number is ${BiggerNum(5886,100000)}`);



const BiggerNum = (num1,num2) => (num1>num2) ? num1 : num2

console.log(`Bigger Number is ${BiggerNum(838,14)}`);
console.log(`Bigger Number is ${BiggerNum(67,19)}`);
console.log(`Bigger Number is ${BiggerNum(8,1924)}`);
console.log(`Bigger Number = ${BiggerNum(8,11)}`);