var randomNumber1 = Math.floor((Math.random() * 6)) + 1

const img1 = document.getElementsByClassName("img1");
img1[0].setAttribute("src", `./images/dice${randomNumber1}.png`);

var randomNumber2 = Math.floor((Math.random() * 6)) + 1

const img2 = document.getElementsByClassName("img2");
img2[0].setAttribute("src", `./images/dice${randomNumber2}.png`);

const heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins! 🚩";
} else {
    heading.textContent = "Draw!"
}