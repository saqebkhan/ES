const asyncway=()=>{
    setTimeout(()=>{
        console.log("First Call...")
    },50000)
    console.log("Second Call...")
}

asyncway()