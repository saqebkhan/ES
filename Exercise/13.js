function big(n1,n2,n3){
    bigger=0
    smaller=0
    if(n1>n2){bigger=n1,smaller=n2}bigger=n2, smaller=n1 ;
    if(n3>bigger){bigger= n3}bigger= bigger;
    if(n3<smaller){smaller=n3}smaller = smaller;
    
    console.log(`bigger is ${bigger}`)
    console.log(`smaller is ${smaller}`)
 
    
}
big(66,75,22)