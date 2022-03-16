let temprature = 12;

if (temprature < 0){
  console.log("Make sure you pick out a scarf!");
} else if (temprature < 15){
  console.log("Short sleeves won't cut it");
} else {
  console.log("Short sleeves are fine.");
} 

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age >18){
  console.log("You are eligible to vote.");
}

temprature = -41;

if (temprature < -40 || temprature > 40) {
  console.log("Maybe going outside isn't such a great idea");
}

let raining = false;

if (!raining) {
  console.log("Leave your umbrella at home");
}