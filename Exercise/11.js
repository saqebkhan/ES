function factorial(number){

    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }

if(fact<2){
        return "composite";}
    // for(i=2; i<fact; i++){
       else if(fact%i==0){return "composite"}
    // }
    else{return "prime"}

}

console.log(factorial(49))