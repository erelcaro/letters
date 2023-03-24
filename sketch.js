// var letter =
//   "Dear Anna,\n\nThree years have flown by, and my love for you has only grown stronger with each passing day.\n\nYour smile, it's like a beam of light that illuminates my life, and I feel so lucky to be able to see it every day.\n\nYour creativity is simply awe-inspiring, it's one of the many things that sets you apart and makes you truly one of a kind.\n\nYou're my reason for getting up each morning, my inspiration for all that I do.\n\nYour passion and drive, your kindness and compassion, everything about you makes me fall deeper in love with you each day.\n\nForever and always,\nTom";
// var words = letter.split(" ");
// var currentWord = 0;
// var displayText = "";
// var x, y;
// let anna;
// let font;

// function preload() {
//   anna = loadSound("anna.mp3");
//   font = loadFont("Kleymissky_0283.otf");
// }

// function setup() {
//   createCanvas(500, 500);
//   background(255, 100, 100);
//   textFont(font);
//   textSize(20);
//   fill(0);
//   textAlign(CENTER, CENTER);
//   x = 30;
//   y = 50;
// }

// function draw() {
//   background("beige");
//   text(displayText, x, y, 400, 200);

//   if (frameCount % 30 == 0 && currentWord < words.length) {
//     displayText += words[currentWord] + " ";
//     frameCount = 0
//     currentWord++;
//   }
// }
// function mousePressed() {
//   if (anna.isPlaying()) {
//     // .isPlaying() retorna una variable booleana
//     anna.stop();
//     background(255, 0, 0);
//   } else {
//     anna.play();
//     background(0, 255, 0);
//   }
// }

var letter = "Dear Anna,\n\nThree years have flown by, and my love for you has only grown stronger with each passing day.\n\nYour smile, it's like a beam of light that illuminates my life, and I feel so lucky to be able to see it every day.\n\nYour creativity is simply awe-inspiring, it's one of the many things that sets you apart and makes you truly one of a kind.\n\nYou're my reason for getting up each morning, my inspiration for all that I do.\n\nYour passion and drive, your kindness and compassion, everything about you makes me fall deeper in love with you each day.\n\nForever and always,\nTom";
var words = letter.split("");
var currentChar = 0;
var displayText = "";
var x, y;
let anna;
let font;

function preload() {
  anna = loadSound("anna.mp3");
  font = loadFont("Kleymissky_0283.otf");
}

function setup() {
  createCanvas(500, 500);
  background(255, 100, 100);
  textFont(font);
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  x = 30;
  y = 50;
}

function draw() {
  background("beige");
  text(displayText, x, y, 400, 200);

  if (frameCount % 10 == 0 && currentChar < words.length) {
    if (words[currentChar] === "\n") {
      displayText += words[currentChar];
      currentChar++;
      frameCount = 0;
      day(500);
    } else {
      displayText += words[currentChar];
      currentChar++;
      frameCount = 0;
    }
  }
}

function mousePressed() {
  if (anna.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    anna.stop();
    background(255, 0, 0);
  } else {
    anna.play();
    background(0, 255, 0);
  }
}



