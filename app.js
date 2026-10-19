import express from "express";
const app=express();
const PORT=process.env.PORT||3100;
app.get("/",(req,res)=>{
    res.send(`<h1>Welcome to my Node jS application</h1>
        <p>my application is rendered on the Render Cloud</p>`);
});
app.get("/api",(req,res)=>{
    res.json({
        message:"Node Js application is working ",
        platform:"Render cloud",
        status:"Success"
    });
});

app.get("/health",(req,res)=>{
    res.json({
        status:"Healthy"
    });
});

app.listen(PORT,()=>{
    console.log("Server is running in http://localhost:3100");
})