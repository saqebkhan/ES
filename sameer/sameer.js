// function outer() {
//   var x = 30;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

// var myFunction = function (x, y) {
//   return x / y;
// };
// console.log(myFunction(16,8))

// function kharcha(arr, cost, layer) {
//   let result = arr.reduce((a, c) => a + c, 0);
//   let afterCost = result * layer;
//   let final = afterCost * cost;
//   return final;
// }
// console.log(kharcha([20,10,10,20],10,3))

// 9
// 9*8*7*6*5*4*3*2*1= xyz

// let str = "kanak";

// let myFunction=(str) => {
//     let reversed = '';
//     for(let i = str.length-1; i>=0; i--){
//         reversed += str[i];
//     }
//     return reversed == str;
// }
// console.log(myFunction(str));

// let str = "1mam1";

// function table(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(num * i);
//   }
// }

// table(7)

// function side(nums, qualityWire, cheapWire, cost) {
//   let sum = 0;
//   for (let i = 0; i <= nums.length; i++) {
//     sum = sum + i;
//   }
//   if (cheapWire == 0) {
//     cheapWire = 1;
//   }
//   return sum * qualityWire * cost * cheapWire;
// }
// console.log(side([1, 2, 3], 3, 0, 10));

// function side(nums) {
//   let sum =0;
//   for (let i = 0; i <=nums.length; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(side([1,2,3,4]))

// 6
// 6+5+4+3+2+1+0 = 21
// function add(num) {
//   let sum = 1;
//   for (let i=num; i>=1; i--) {
//     sum = sum* i;
//   }
//   return sum;
// }
// console.log(add(6));

// 6
// 6^2 + 5^2 + 4^2 + 3^2 + 2^2 + 1^2 = 91
// 36 + 25 + 16 + 9 + 4 + 1 = 91

// function square(nums) {
//   let sum = 0;
//   for(let i=1; i<=nums; i++){
//     sum = sum + i**2;
//   }return sum;
// }
// console.log(square(6))

// 25
// 5

// function sqrt(num){
//   for(i=0; i<num; i++){
//     if(i**2 == num){
//       return i;
//     }
//   }
// }
// console.log(sqrt(3));

// 60
// function div(num) {
//   let myArr = [];
//   let total = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       myArr.push(i), total++;
//     }
//   }
//   console.log(myArr, total);
// }
// div(60);

// let num = 0;
// if (0) {
//   console.log("this is zero");
// } else {
//   console.log("this is not zero");
// }

// const num = [];

// for (let i = 0; i < arr.length; i++){
//   if (typeof( arr[i] ) == 'string' ){
//     num.push(arr[i])
//   }
// }
// console.log(num)

// let str = "123amir89";
// let arrStr = [];
// for (let i = 0; i < str.length; i++) {
//   if (!isNaN(Number(str[i]))) arrStr.push(str[i]);
// }
// console.log(arrStr);

// let arr = [7, 2, 9, 5, 1, 8, 6, 3];
// let ans = [];
// for (let i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == 9) {
//       ans.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(ans);

// function loop(num){
//   let sum = 0;
//   for(let i = 1; i<=num; i++){
//     sum += i;
//   }return sum;
// }
// console.log(loop(1000000));

// function algo(num){
//   return num * ( num + 1 ) / 2;
// }
// console.log(algo(100));9`

let array = [10, 20, 30, 40, 50, 60, 70];

// // let array2 = [];
// // for (let i = 0; i < array.length; i++) {
// //   array2.push(array[] + 1);
// // }
// // console.log(array2);

// // const array3 = [];
// const array3 = array.map((element) => {
//   return element + 1;
// });

// console.log(array3);

// const arr = [];
// const array2 = array.forEach((item) => {
//   arr.push(item+1)
// });
// console.log(arr);

// function noStr(str){
//   let arrStr = str.split('');
//   let ans = [];
//   for(i = 0; i<arrStr.length; i++){
//     if(!isNaN(Number((arrStr[i])))){
//       ans.push(arrStr[i]);
//     }
//   }return ans;
// }
// console.log(noStr('123Amir890'));

// console.log(isNaN("5"));






