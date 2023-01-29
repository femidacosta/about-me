let userPoints = 0;
alert("Welcome to my guessing game.");
let user = prompt("What can I call you?");
// ensure the user ACTUALLY gives their name
while (!user) {
  user = prompt("For us to proceed with this page, I need your name :) ");
  alert("Welcome " + user + "! I'm so glad your here! Lets run the game");
  console.log("Hello " + user);
}
// question one
function question1() {
  let location = prompt[("spain", "scotland", "india", "brazil")];
  let correctAnswer = true;
  while (!correctAnswer) {
    let question1 = prompt("What is my favourite location?").toLowerCase();
    if (place == travelQuestion) {
      correctAnswer = true;
      return "Correct!" + travelQuestion + "!";
      correctAnswer = true;
      break;
      userPoints++;
    } else {
      alert("try again");
    }
  }
  console.log(travelQuestion + question1);
}
// question two
function question2() {
  confirm("do you like plants?");
  if (question2 == false) {
    alert("Thats cool, I have alot of house plants");
    userPoints++;
  } else {
    alert("Keep going");
  }
}
function question3() {}
"what is my favourite genre of music?".toLowerCase();
let genre =
  prompt[("electroinic", "dub", "reggae", "punk", "tek", "rock", "hiphop")];
let attempts = 4;
while (attempts > 0) {
  for (let i = 0; i < genre.length; i++)
    if (question3 == genre[i]) {
      console.log("Correct, I love " + question3 + "!");
      attempts = 0;
      userPoints++;
    }
  if (attempts > 0) {
    question3 = prompt("Incorrect, Try Again");
  }
}
attempts--;
//question four
function question4() {
  confirm("Do I like to cook?");
  if (question4 == true) {
    console.log("Correct! I love to cook different types of food!");
    alert("Correct!");
    userPoints++;
  } else {
    alert("Next!!");
  }
}
//question five
function question5() {
  ("Am I 30 yet?");
  if (question5 == true) {
    console.log("I dont know where the past 10 years have gone!!");
    userPoints++;
  } else {
    alert("wise with age?!");
  }
  console.log(
    " Yes" +
      question5 +
      "I turned 30 last month, you have gained " +
      userPoints +
      "!"
  );
}
alert("well done " + user + "overall, You scored " + userPoints + "/5");
