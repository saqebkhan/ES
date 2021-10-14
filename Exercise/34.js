// function closer(a,b){
//     if(a==21){return a}if(b==21){return b}
//     if(21-a>21-b){
//         return b;
//     }if(a-21<b-21){
//         return b;
//     }return a;
// }
// console.log(closer(19,22))

const arr = (tohit) => {
    tohit.forEach(element => {
      console.log( element ** 3)
    });
}
arr([2,3,4,6]);
