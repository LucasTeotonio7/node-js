const express = require("express");
const app = express();



app.get("/", function(req,res){
    res.send("Index.js Working!")
})

app.get("/about", function(req,res){
    res.send("description about!")
})

app.get("/blog", function(req,res){
    res.send("my blog!")
})


app.listen(8081, function(){
    console.log("Server Running !!");
});
