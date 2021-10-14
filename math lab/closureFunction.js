function outer(){
    x=50
    function inner(){
        console.log(x)
    }
    inner()
}
outer()