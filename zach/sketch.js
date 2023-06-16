let canvasWidth = 700;
let canvasHeight = 1000;
let displayText = "";
let currentChar = 0;
let words =
  "לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ\n \n לֹא טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ \nאֲבָל הוּא לְבַדּוֹ בֵּין כֹּה וָכֹה, \n וְהוּא מְחַכֶּה וְהוּא לְבַדּוֹ\n וְהוּא מִתְמַהְמֵהַּ וְהוּא לְבַדּוֹ. \n וְהוּא לְבַדּוֹ יוֹדֵעַ\n שֶׁגַּם אִם יִתְמַהְמֵהַּ \n בּוֹא יָבוֹא \n \n                .נתן זך \n";
let dots = [];

let textSpeed = 20; // Adjust the text speed here (higher values make it faster)

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textSize(15);
  textLeading(40);
  textAlign(RIGHT, TOP);
  x = 30;
  y = 50;
  frameRate(textSpeed); // Set the frame rate
}

function draw() {
  background("white");
  noFill();
  stroke(0, 100);

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

  if (currentChar < words.length) {
    // Add one character at a time
    displayText += words[currentChar];
    currentChar++;
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

