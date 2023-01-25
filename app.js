let userPoints = 0;

alert("Welcome to my guessing game.");

let user = prompt("What can I call you?");

// ensure the user ACTUALLY gives their name
while (!user) {
  user = prompt(
    "For us to proceed with this important page, I need your name :) "
  );
}

alert("Welcome " + user + "! I'm so glad your here! Lets run the game");

// question one
let travelQuestion = prompt("What is my favourite location?").toLowerCase();

let PlacesILike = ["spain", "scotland", "india", "brazil"];

for (let i = 0; i < PlacesILike.length; i++) {
  if (travelQuestion == PlacesILike[i]) {
    alert(
      "Correct, I think I have started to annoy my friends with the amount I talk about " +
        travelQuestion +
        "!"
    );
    userPoints++;
  }
}

// question two
let plantsQuestion = confirm("do you like plants?");

if (plantsQuestion == false) {
  alert("Thats cool, I have alot of house plants");
  userPoints++;
} else {
  alert("I have alot of house plants?");
}

//question three
let musicQuestion = prompt("what is my favourite genre?").toLowerCase();

let genre = [
  "electroinic",
  "dub",
  "reggae",
  "punk",
  "tek",
  "ambient",
  "hiphop",
];

for (let i = 0; i < genre.length; i++) {
  if (musicQuestion == genre[i]) {
    alert("Correct, I love " + musicQuestion + "!");
    userPoints++;
  }
}

//question four
let girlfriend = { herName: "mollie", age: "27", occupation: "biologist" };

console.log("girlfriend" in herName);
// Expected output: true

delete HerName;
if ("age" in HerName === false) {
  herName = "Mollie";
}

console.log(herName.occupation);
// Expected output: "Mollie"

//question five
let carQuestion = prompt("What car do I want to drive?").toLowerCase();

let CarsILike = ["golf", "honda", "bmw", "classic car"];

for (let i = 0; i < CarsILike.length; i++) {
  if (carQuestion == CarsILike[i]) {
    alert(
      "Correct, but im not really that bothered about cars to be honest!" +
        CarsQuestion +
        "!"
    );
    userPoints++;
  }
}

//question six
let chocolate = [
  "dairy Milk",
  "crunchie",
  "lindor",
  "galaxy",
  "dark chocolate",
];

for (let i = 0; i < chocolate.length; i++) {
  console.log[i];
}

let number = 4;
while (number != 1) {
  console.log(number);
  number--; //3
}

alert("My favourite chocolate is" + chocolate);

alert(
  "Congratulations my friend " + user + "! You scored " + userPoints + "/6"
);
