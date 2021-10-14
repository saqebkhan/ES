// const palendrome=(str)=>{
//     const arrStr=str.split('');
//     for(let i =0; i< (arrStr.length/2); i++){
//         if(arrStr[i]!==arrStr[arrStr.length-1-i]){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(palendrome("madam"))


// function palendromeOpt(str){
//     return str === str.split("").reverse().join("")
// }
// console.log(palendromeOpt("mm"))

const pal=(string)=>{
const arrString=string.split("");
for(i=0; i<(string.length/2); i++){
    if(arrString[i]!==arrString[arrString.length-1-i]);
    return false;
}
return true;
}
console.log(pal("khan"));






// const pepe=(sr)=>{
// const arsr=sr.split("")
// for(i=0; i<(sr.length/2); i++){
// if(arsr[i]!==arsr[arsr.length-1-i])
// return false
// }
// return true

// }
// console.log(pepe("madam"))

const paled=(String)=>{
    const arrpaled=String.split("");
    for(i=0; i<(String.length/2); i++){
    if(arrpaled[i]!==arrpaled[arrpaled.length-1-i])
    return false
    
    }
    return true
     
    }

    console.log(paled("refer"))
