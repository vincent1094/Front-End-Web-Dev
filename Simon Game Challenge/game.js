var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gameStart = false;
var level = 0;

// Registering event handler for restarting game keypress and user chosen button
$(document).on("keypress", function() {
    if (gameStart == false) {
        nextSequence();
        gameStart = true;
    }
});

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

// Sound and animation
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

// Start Over
function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
    gameStart = false;
}

// Game Over
function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
}

// Compare user answers against game pattern, if it is the last guess and correct, go to next level
function checkAnswer(latestUserGuessedIndex) {
    if (userClickedPattern[latestUserGuessedIndex] == gamePattern[latestUserGuessedIndex]) {
        if (latestUserGuessedIndex == gamePattern.length - 1) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    } else {
       gameOver();
       startOver();
    }
}

// Random button, either for starting game or next level
function nextSequence() {
    level += 1;
    $("h1").text("Level " + level);
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    gamePattern.push(randomChosenColour);
}