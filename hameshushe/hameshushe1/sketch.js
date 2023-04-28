let canvasWidth = 700;
let canvasHeight = 1000;
let displayText = "";
let currentChar = 0;
let words =
  "היי את, זוכרת אותי?\nביום הראשון של סמסטר א' בשנה ב' ראיתי אותך יושבת במשושה במכנס ג'ינס קרוע, נעלי ספורט וחולצת פסים, ישבת בישיבה מזרחית לבדך ונגסת בתפוח ירוק.\nמידי פעם הבחנתי בך מסיטה את מבטך לצדדים, נדמה שחיפשת מישהו, או אולי מישהי, כל דבר שיצדיק את ישיבתך הבודדה.\n רוב הזמן היית שקועה מול המסך, מגוללת ומגוללת למרות שכבר נמאס לך ושאין שום דבר חדש תחת השמש, מחכה שחצי שעת ההפסקה תיגמר.\nבטח חשבת לעצמך שחבל שלא הבאת איתך את הספר שלא סיימת לקרוא בשבת, ותהית אם כדאי  לך לפתוח את המחשב שלך כדי שיחשבו שאת עסוקה. אבל האמת היא שאף אחד לא חשב עלייך או הבחין בך באותו הרגע. ולמרות זאת, באותו היום, זה לא היה כל כך נורא להיות לבד, עם עצמך. בהתחלה היה לך קשה. אחרי כל כך הרבה ימים שבהם הסתובבת לבדך, הגעת עד לרחבה ולא אזרת אומץ להתיישב, אפילו בפינה צדדית. בהחלטה רגעית בחרת להתיישב בביטחון וגילית שזה לא כל כך מפחיד. יש הרי עוד יחידים כמוך, ודווקא נראה שטוב ונעים להם מהישיבה הזו, רק הם עם עצמם, לבד. מאז עברו עוד שני סמסטרים, ואת כבר לא זוכרת את מספר הפעמים בהם התיישבת במשושה לבדך. בימים שטופי שמש הצטערת על החולצה הארוכה, ובימים גשומים הצטערת והלכת לשבת לבד בספרייה. בבצלאל החדש אין משושה, והבדידות באה והולכת. את מרגישה שקופה ומקווה שלמרות שרואים אותך בכל רגע נתון, אף אחד לא מצליח לחדור אל מה שאת מרגישה בתוכך. ואני רואה אותך למרות שאת לא יודעת, ומקווה שעד הסמסטר הבא, תמצאי משושה שיכיר את כל הפינות שלך. \nשלך, אני.";
let dots = [];
// let clair = [];
let clair;


function preload() {
  oldletter = loadImage("oldletter.jpg");
  clair = loadSound("CLAIR.mp3");
}

function setup() {
  // clair  = loadSound('assets/CLAIR.mp3')
  createCanvas(canvasWidth, canvasHeight);
  textFont("gadi");
  textSize(15);
  textLeading(40);
  textAlign(RIGHT, TOP);
  x = 30;
  y = 50;
}
function mousePressed() {
    if (clair.isPlaying()) {
      // .isPlaying() returns a boolean
      clair.stop();
      background(oldletter);
    } else {
      clair.play();
        document.querySelector("#backgroundMusicPlay").style.display = "none";    
      background(oldletter);
    }
}

document.querySelector("#backgroundMusicPlay").addEventListener("click",(e) => {
    if (clair.isPlaying()) {
      // .isPlaying() returns a boolean
      clair.stop();
      background(oldletter);
    } else {
      clair.play();
      document.querySelector("#backgroundMusicPlay").style.display = "none";
      background(oldletter);
    }  
});

function draw() {
  background(oldletter);
  noFill();
  stroke(0, 100);
  rect(15, 15, 670, 970);
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
  if (frameCount % 5 == 0 && currentChar < words.length) {
    if (words[currentChar] === "\n") {
      displayText += words[currentChar];
      currentChar++;
      frameCount = 0;
    } else {
      displayText += words[currentChar];
      currentChar++;
      frameCount = 0;
    }
  }

  // text(displayText, 50, 50);

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

