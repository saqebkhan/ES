const asyncway=()=>{
    setTimeout(()=>{
        console.log("First Call...")
    },5000)
    console.log("Second Call...")
}

asyncway()