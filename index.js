//For first player

var randomNum1 = Math.floor(Math.random()*6)+1;

var random_image1 = "dice"+randomNum1+".png";

var image_path1 = "images/"+random_image1;

var img_result1=document.getElementsByTagName("img")[0];

img_result1.setAttribute("src",image_path1); 

//For second player
var randomNum2 = Math.floor(Math.random()*6)+1;

var random_image2 = "dice"+randomNum2+".png";

var image_path2 = "./images/"+random_image2;

var img_result2 = document.getElementsByTagName("img")[1];

img_result2.setAttribute("src",image_path2);

//Finalising the result

if(randomNum1 > randomNum2)
{
  var result=document.querySelector("h1");
  result.innerHTML="🏅 player-1️⃣❗win"
  result.style.color="orange"
}

else if(randomNum1 < randomNum2)
{
  var result=document.querySelector("h1");
  result.innerHTML="🏅 player-2️⃣❗win"
  result.style.color="orange"
}
else
{
  var result=document.querySelector("h1");
  result.innerHTML="🔄DRAW❗"
  result.style.color="orange"
}