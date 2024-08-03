// alert("hola");

let gamePattern=[];
let buttonColours = ["red","blue","green","yellow"];





function nextSequence(){
    var randomNumber= Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).on("click", function(){
$("." + randomChosenColour).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();
return randomChosenColour;

})


};

$(".btn").click(nextSequence);