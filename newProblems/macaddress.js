// function mac(num){
//     arrNum=Array.from(num.toString())
//     if(arrNum.length>16){console.log("16 chars needed")}else if(arrNum.length<16){console.log("16 chars needed")}
//     mixed=[arrNum[0]+arrNum[1],arrNum[2]+arrNum[3],arrNum[4]+arrNum[5],arrNum[6]+arrNum[7],arrNum[8]+arrNum[9],arrNum[10]+arrNum[11],arrNum[12]+arrNum[13],arrNum[14]+arrNum[15]]
// console.log(mixed)
// }
// mac("1234567891234567")


function mac(num){
    let newArr = Array.from(num.toString())
let concat = `${newArr[0]}${newArr[1]}:${newArr[2]}${newArr[3]}:${newArr[4]}${newArr[5]}:${newArr[6]}${newArr[7]}:${newArr[8]}${newArr[9]}:${newArr[10]}${newArr[11]}:${newArr[12]}${newArr[13]}:${newArr[14]}${newArr[15]}`
return concat;
}
console.log(mac("1122334455667788"));