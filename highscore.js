var highscore = document.querySelector('#highscore');
var clear = document.querySelector('#reset');
var play = document.querySelector('#play');


clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
allScores.sort((a, b) =>b.score - a.score);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    highscore.appendChild(createLi);
    }
}

play.addEventListener("click", function () {
    window.location.replace("./index.html");
});

highscore.addEventListener("click", function () {
    window.location.replace("./highscore.html");
});