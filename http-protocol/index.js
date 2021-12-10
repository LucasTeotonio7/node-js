const express = require("express");
const app = express();



app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/about", function(req,res){
    res.sendFile(__dirname + "/html/about.html")
})

app.get("/blog", function(req,res){
    res.send("my blog!");
})

app.get('/ola/:name/:age/', function(req, res){
    res.send("<b>Name:</b> " + req.params.name+ " <br><b>Age:</b> "+ req.params.age);
})


app.listen(8081, function(){
    console.log("Server Running !!");
});
