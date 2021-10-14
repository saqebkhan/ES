function sumofMultipleof3N5(){
    mul3=0
    mul5=0
    for(i=1; i<1000; i++){
        if(i%3==0){
            mul3=mul3+i;
            
        }
    }
    mul5=0
    for(i=1; i<1000; i++){
        if(i%5==0){
            mul5=mul5+i;
            
        }
    }
    console.log(`The sum of all the multiples of 5 is ${mul5}`)
    console.log(`The sum of all the multiples of 3 is ${mul3}`)


}
sumofMultipleof3N5()