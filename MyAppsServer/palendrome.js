const palendrome=(str)=>{
    const arrStr=str.split('');
    for(let i =0; i< Math.floor(arrStr.length/2); i++){
        if(arrStr[i]!==arrStr[arrStr.length-1-i]){
            return false;
        }
    }
    return true;

}
console.log(palendrome("madam"))
console.log(palendrome("maadam"))
console.log(palendrome("madaam"))
console.log(palendrome("madama"))
console.log(palendrome("mdadam"))
console.log(palendrome("mladam"))


// function palendromeOpt(str){
//     return str === str.split("").reverse().join("")

// }
// console.log(palendromeOpt("khan"))