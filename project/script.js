let hidden = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function editMessage(msg) {
    document.querySelector(".message").textContent = msg;
}
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    if (guess === hidden) {
        editMessage("Correct answer!");
        document.querySelector("body").style.backgroundColor = "#3bff00";
        document.querySelector(".number").textContent = hidden;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else {
        if (score >= 1) {
            editMessage(guess > hidden ? "Too High" : "Too low");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            editMessage("You lose!");
            document.querySelector("body").style.backgroundColor = "#ff0000";
        }
    }
});
document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#222";
    score = 20;
    document.querySelector(".score").textContent = score;
    hidden = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".number").textContent = "?";
    editMessage("Start guessing...");
    document.querySelector(".guess").textContent = " ";
});
