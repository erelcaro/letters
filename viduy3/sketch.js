let canvasWidth = 700;
let canvasHeight = 600;
let displayText = "";
let currentChar = 0;
let words =
  "וידוי מספר 30532#.   \nבאמת לא ציפיתי שתקופת המבחנים הזאת תגרום לי להרגיש כזאת בדידות... אני רואה כל היום אנשים מהתואר לומדים ביחד, עושים ערבי למידה משותפים או אפילו סתם בזום. ואני לבד. וזה גם חברים שלי כן? נפגשים ולומדים ביחד או עושים שיחות ולא קוראות לי אפילו. אני מנסה להבין מה עשיתי רע? אני יודעת שזאת לא פעם ראשונה אז זרקתי כבר כמה פעמים שהייתי שמחה אם נשב ביחד מתישהו ונעזור אחת לשניה ועובדה שהן פשוט התעלמו מזה. דוגרי נפגעתי ממש ואני מרגישה פשוט לא רצויה כבר בשום מעגל ״חברים״ שלי.. אני מנסה להתעלם מזה ולהתרכז במבחנים אבל מרגיש לי שהתחושה המגעילה הזאת של אני לבד פשוט קשה להתעלמות אחרי שניסיתי כל הסמסטר להדחיק את זה. ברור שאף אחד לא חייב לי כלום אבל עדיין.. הרי כשצריך סיכום מיום שהם לא היו בו הם ישר יכתבו לי ויבקשו אבל כשאני מבקשת לעשות זום או משהו אז פתאום אני לא קיימת. מה עושים עם זה? חשבתי שלפחות באוניברסיטה ארגיש רצויה קצת אבל מסתבר שזה כמו בחטיבה ובתיכון.";
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

