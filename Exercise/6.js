// function DiffXY(x, y) {
//   if (
//     (x - y == 5) |
//     (x - y == 4) |
//     (x - y == 3) |
//     (x - y == 2) |
//     (x - y == 1) |
//     (y - x == 5) |
//     (y - x == 4) |
//     (y - x == 3) |
//     (y - x == 2) |
//     (y - x == 1)
//   ) {
//     return "less than 5";
//   }
//   return "more than 5";
// }
// console.log(DiffXY(21, 28));

// function DiffXY5(x,y){
//     ans=x-y;
//     for(i=0; i<=ans; i++){
        // if(i<5){return "less than 5"}return "more than 5"
//         return ans;
//     }
// }
// console.log(DiffXY5(12,3))

function l(x,y){
    return Math.abs(x-y) < 5
}
console.log(l(2,6))
