//END-GAME

var score = 0;

var readlineSync = require("readline-sync");
var user = readlineSync.question("What is your name? ");

console.log("Hey " + user + "! Welcome to DO YOU KNOW Sandesh.\n");

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log("You entered: " + userAnswer);
  
  if(userAnswer === answer){
    console.log("Right answer!");
    score = score + 2;
  }
  else{
    console.log("Wrong answer!");
  }

  console.log("Current score:", score);
  console.log("-------");
}

var questionAndAnswer = [
  {
    question: "Where do i live? ",
    answer: "Chandrapur"
  },
  {
    question: "Which is my favorite season? ",
    answer: "Winter"
  },
  {
    question: "Which is my favorite anime series? ",
    answer: "Onepiece"
  },
  {
    question: "What Tv show do I usually watch while having dinner? ",
    answer: "Tmkoc"
  },
  {
    question: "Which one would i prefer, Marvel or DC? ",
    answer: "Marvel"
  }
]

for(var i = 0; i < questionAndAnswer.length; i++){
  var currentQuestion = questionAndAnswer[i];
  play(currentQuestion.question, currentQuestion.answer);  
}

var highScores = [
  {
    name: "Sandesh",
    score: 10
  },
  {
    name: "Sanket",
    score: 9
  }
]
console.log("\nYAY! You SCORED:", score);
console.log("\nCheckout highscores:");
for(var i = 0; i < highScores.length; i++){
  console.log(highScores[i].name + ":", highScores[i].score);
}

console.log("\nWin check:");
for(var i = 0; i < highScores.length; i++){
  if(score > highScores[i].score){
    console.log("Have you beaten " + highScores[i].name + "?", true);
  }
  else if(score < highScores[i].score){
    console.log("Have you beaten " + highScores[i].name + "?", false);
  }
  else{
    console.log("There is a tie between You and " + highScores[i].name + ".");
  }
}

console.log("\nThank you for playing...");

// for(var i = 0; i < 2; i++){
//   console.log("Have you beaten " + highScores[i].name + "?", score >= highScores[i].score);
// }