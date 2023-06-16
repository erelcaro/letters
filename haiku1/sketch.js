let canvasWidth = 700;
let canvasHeight = 1000;
let displayText = "";
let currentChar = 0;
let words =
  "הייקו בדידות | אראל\n \n אֶת בְּדִידוּתֵךְ אַתְ, \nצוֹבַעַת לְאַט לְאַט, \n בגווני אפור.\n \n כשהלבד כָּאן, \n שוֹקֵעַ אִתְךָ וְאַתְ \n אִתוֹ, ודממה.\n \n למשך שעה, \n עמדי לבדך וראי, \n אַתְ שְקוּפָה כְּמוֹ דָם. \n \n וְהַיָם, הַיָם. \n אַתְ סוֹעֶרֶת, הוּא דוֹמֵם. \n כולם מתמזגים \n \n מִלְבַדִך, מֵי עוד \n יַצִילך, חשופת כל \n בּוּשָה, וכלימה. \n";
let dots = [];


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont("gadi");
  textSize(15);
  textLeading(40);
  textAlign(RIGHT, TOP);
  x = 30;
  y = 50;
}

function draw() {
  background("white");
  noFill();
  stroke(0, 100);
  // rect(15, 15, 670, 970);
  stroke(0);
  if (mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  stroke(0, 40);
  const lineSpacing = height / 24;
  for (let i = 0; i < 30; i++) {
    const y = lineSpacing * (i + 0.5);
    line(30, y, width - 20, y);
  }

  // Write the text
  fill(0);
  text(displayText, x, y, 650, 1000);
  if (frameCount % 6 == 0) {
    if (displayText.length < words.length) {
      displayText += words[displayText.length];
    } else {
      displayText = ""; // Reset the text to repeat
    }
  }

  // Add random dots
  if (random() < 0.05) {
    let x = random(0, width);
    let y = random(0, height);
    let r = random(3, 13);
    dots.push({ x, y, r });
  }

  // Draw dots
  noStroke();
  fill(0);
  for (let i = dots.length - 1; i >= 0; i--) {
    ellipse(dots[i].x, dots[i].y, dots[i].r, dots[i].r);
    dots[i].r -= 0.05;
    if (dots[i].r < 0) {
      dots.splice(i, 1);
    }
  }
}

