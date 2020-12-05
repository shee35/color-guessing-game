var colors= generaterandomcolors(6);

var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();
var colorDisplay = document.getElementById("colordisplay");
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
var num=6;



easybtn.addEventListener("click",function(){
	num= 3;
	colors = generaterandomcolors(num);
	pickedcolor = pickcolor();
	for(var i =0;i< num;i++){
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor= "#232323";
	squares[3].style.backgroundColor= " #b9a669";
	squares[4].style.backgroundColor= " #b9a669";
	squares[5].style.backgroundColor= " #b9a669";
})

hardbtn.addEventListener("click", function(){
	num=6;
	colors = generaterandomcolors(num);
	pickedcolor = pickcolor();
	colordisplay.textContent= pickedcolor;
	for(var i =0;i< num;i++){
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor= "#232323";
})

resetbtn.addEventListener("click", function(){
	colors = generaterandomcolors(num);
	pickedcolor = pickcolor();
	colordisplay.textContent= pickedcolor;

	for(var i =0;i< squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor= "#232323";
	resetbtn.textContent = "new colors";
	messagedisplay.textContent =" its easy! ";
})

colordisplay.textContent= pickedcolor;

for(var i = 0; i<num; i++){
	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor= this.style.backgroundColor;

		if(clickedColor===pickedcolor){
			messagedisplay.textContent= "correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetbtn.textContent = "Play Again";
		}
			
		else {
			this.style.backgroundColor= "#b9a669";
			messagedisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	for(var i=0; i<num; i++){

		squares[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random() *colors.length);
		return colors[random];
}

function generaterandomcolors(num){

	var arr= [];

	for(var i=0;i< num; i++){
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);

	return "rgb(" +r +", "+ g+ ", "+ b+")";
}