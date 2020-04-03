

var express=require("express");
var app=express();

// "/"  => "hi there!"
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});	

app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof",
		cat: "Meow",
		goldfish: "..."
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The "+ animal + " says '" + sound + "'");
});
			
app.get("/repeat/:word/:times", function(req, res){
	var times = Number(req.params.times);
	
	var word=req.params.word;
	var text="";
	for(var i=0; i<times; i++){
		text=text+word+" ";
	}
	res.send(text);
	
});

app.get("*", function(req,res){
	res.send("Sorry, page not found... What are you doing with your life ?");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("THE SERVER HAS STARTED")
});