var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gameStart = false;
var level = 0;
var correctGuess = true;

$(document).on("keypress", function() {
    if (gameStart == false) {
        nextSequence();
        gameStart = true;
    }
});

function nextSequence() {
    level += 1;
    $("h1").text("Level " + level);
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
}

function playSound(name) {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
   
    setTimeout(function() {
        $("." + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(numberOfGuesses) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("Right");
        setTimeout(function() {
            nextSequence();
        }, 1000);
    } else {
        console.log("Wrong");
    }

    for (let i = 0; i < numberOfGuesses; i++) {
        if (userClickedPattern[i] == gamePattern[i]) {
            console.log("Right");
        } else {
            console.log("Wrong");
            break;
            correctGuess = false;
        }
    }

    if (correctGuess == true) {
        nextSequence();
    }


    console.log("Game Over, any key to continue");
}

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(gamePattern.length);
})