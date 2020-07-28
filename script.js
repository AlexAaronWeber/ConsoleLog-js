// Declare and initialize the following variables with appropriate values:
// name (string), age (number), birthday (string), detroitGC (boolean) - choose either true or false, lifeEvents (array with 4 items. 4 important life events)
const name = "Alex Weber";
let age = 25;
let birthday = "August 4";
let detroitGC = true;
let lifeEvents = [
  "I was born in Royal Oak, Michigan",
  "I went to Wayne State University",
  "I lived in Wuhan, China for 2 years",
  "I have a donkey tattoo on my ass!",
];

// Write an if/else statement that runs one of two console.log methods. Your console.log methods must incorporate the variables: name, age, and birthday
// ○ If detroitGC is true, log the following message to the console:
// ■ My name is name and I am a student at Grand Circus in Detroit, Michigan. I am currently age years old and my birthday is on birthday.
// ○ else
// ■ My name is name and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently age years old and my birthday is on birthday
if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the
// length of the lifeEvents array. Each iteration of the loop should log a new sentence
// from the lifeEvents array. You should only have one console.log method.
for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log(`randomNumber !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} interations to randomly generate the number 5`
    );
    break;
  }
}
