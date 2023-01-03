const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let w = Number(req.body.weight);
    let h = Number(req.body.height)/100;

    let result = w/(h*h);
    res.send("Your BMI is: " + result.toFixed(2));
})

app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});