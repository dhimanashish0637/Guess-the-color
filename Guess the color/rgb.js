var num =6;
var easyButton=document.querySelector("#easy");
var hardButton=document.querySelector("#hard");
var colors =generateRandomColors(num);
var square=document.querySelectorAll('.square');
var pickedColor=pickColor();
var DisplayColor=document.getElementById('DisplayColor');
DisplayColor.textContent=pickedColor;
var messageDisplay=document.querySelector('#message');
var h1=document.querySelector("h1");
var resetButton=document.querySelector('#reset');
resetButton.addEventListener("click",function()
{
	resetButton.textContent="New Colors"
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	colors=generateRandomColors(num);
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=colors[i];
	}
	pickedColor=pickColor();
	DisplayColor.textContent=pickedColor;
});


easyButton.addEventListener("click",function()
{
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	num = 3;
	colors=generateRandomColors(num);
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.backgroundColor=colors[i];
		}
		else
		{
			square[i].style.display="none";	
		}
	}
	pickedColor=pickColor();
	DisplayColor.textContent=pickedColor;
});


hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	num=6;
	colors=generateRandomColors(num);
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=colors[i];
		if(square[i].style.display=="none")
		{
		  square[i].style.display="block";	
		}
	}
	pickedColor=pickColor();
	DisplayColor.textContent=pickedColor;
});
for(var i=0; i < square.length; i++)
{
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function() {
		var clickedColor=this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent="You Guessed Right";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again ?"
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}
function changeColors(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color;
	}
}

function pickColor() {
	var rand=Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColors(n)
{
	var arr = [];
	for(var i=0;i<n;i++)
	{
		arr.push(RandomColors());
	}
	return arr;
}
function RandomColors()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}