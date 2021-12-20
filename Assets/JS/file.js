var timer= 60
var counter= 0
var currentScore = 0
var into = document.getElementById("IntroContainer")
var Game= document.getElementById("GameContainer")
console.log("loadIt")
var questions= [
    {
Question: "Commonly used data types do not include..",
Answers: ['strings', 'Boleans', 'Numbers', 'Alerts'],
Correct: "Alerts"
    }
]
function StartGame(){
    console.log("buttonClicked")
into.classList.add("Hide")
Game.classList.remove("Hide")
}
document.getElementById("StartButton").addEventListener("click",StartGame)
