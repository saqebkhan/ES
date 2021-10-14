function addthem(a,b,c){
    condition1=0
    if(a!==b && b!==c &&c!==a){
        return a+b+c;
    }
    if(a==b && b==c && a==c){
        return 0
    }
    if(a==b){
        return c;
    }
    if(b==c){
        return a;
    }return b;
    
}
console.log(addthem(4,2,1));
