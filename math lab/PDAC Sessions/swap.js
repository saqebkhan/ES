function swap(num){
    arrNum = Array.from(num.toString()).map(Number);
    a =  arrNum.reverse()
    if(a[0]=="0"){
        return Number(a[1].toString());
    }return Number(a.join(""));

}
console.log(swap(70))

// a = [6];
// b = a[0]
// c = b.toString();
// console.log(c);
