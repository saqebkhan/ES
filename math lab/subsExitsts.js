// const subsExists =(str)=>{
// const arrStr=str.split(" ")
// let cnt = 0;
// arrStr.forEach((element) => {
//     if (element.toUpperCase() === "part".toUpperCase()){
//         cnt = cnt+ 1
//     }
    
// });
// return cnt;
// }
// const strData ="the  written part of a book, part, etc"

// console.log(subsExists(strData))


const subsExists = (str)=>{
    return str.split(" ").filter((item)=> item === "part").length;
}
const strData = "im the part of your life so this as a part good part"
console.log(subsExists(strData))




// const subsExists = (str)=>{
//     return str.split(" ").includes("life")
// }
// const strData = "im the part of your life so this as a part good part"
// console.log(subsExists(strData))



// const subExists=(str)=>{
//     arrStr=str.split(" ")
//     cnt = 0
//     for (i=0; i<arrStr.length==="lorem"; i++){
//         cnt = cnt + 1


//     }



// }

