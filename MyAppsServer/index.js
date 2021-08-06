const express =require("express")
const app =express()



app.get("/", (req,res)=>{
    res.json({data: ["ali","sameer","majed","arbaz"]});
    
    
});

// app.get("/emp" , (req,res)=>{
//     res.send("Im from google...");
    

// });

// app.get("/dept" , (req,res)=>{
//     res.send("Im a developer..."); 
    
// });

if(app.listen(6000)){
    console.log("Connected to localhost:6000")
}



