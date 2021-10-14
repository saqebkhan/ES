function mul(a,b){
    let sum = a;
    for(i=0; i<b-1; i++){
        sum += a;
    }return sum;
}
console.log(mul(6,8));