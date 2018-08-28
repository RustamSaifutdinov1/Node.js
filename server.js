var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());


app.post("/", function(request, response){
    console.log("Привет");
    var x=request.query.name;
	response.send("Hello,"+x+ "!");
});
app.listen(3001, function(){
	console.log("Listen 3001");
});
