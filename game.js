// alert("hola");

var gamePattern=[];
var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern =[];

var start = false;

var level = 0;

$(".btn").click(function(event){

    userChosenColour = event.target.id;
userClickedPattern.push(userChosenColour);
//console.log(userClickedPattern);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userChosenColour)

})

$(document).keypress(function(){
if(!start){

    $("#level-title").text("level " + level)
    nextSequence()
    start= true;
}
})





function nextSequence(){
    level++;
    $("#level-title").text("level " + level);
    var randomNumber= Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).on("click", function(){
$("." + randomChosenColour).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

return randomChosenColour;

})


};


$(".btn").click(nextSequence);

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}


function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);


}

function checkAnswer(currentLevel){


}


