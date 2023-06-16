let canvasWidth = 700;
let canvasHeight = 1000;
let displayText = "";
let currentChar = 0;
let words =
  "אף פעם לא היית מלך השכבה.\n אף פעם לא היית מוקף ביותר מחמישה או שישה חברים. אבל מעולם לא הרגשת בדידות מהי. בכיתה ו' המורה חילקה את סדר השולחנות מחדש והתיישבת ליד ילד ביישן שלא היה ביניכם יותר מדיי שיח. אחרי יומיים וחצי הייתם החברים הכי טובים. נהנית להצחיק אותו\n ונהנית מהכינוי שהוא נתן לך: מחורפן.\n זה היה קורה לך בכל מקום. בתוך תוכך אתה מחשיב את עצמך כבן אדם די סגור. מי שמסתכל עלייך מהצד חושב שאתה סנוב, כי אתה לא אומר שלום ואתה נמנע מקשר עין עם מכרים שלא באמת מכירים, אותך. המכרים שזכו להכיר אותך באמת, גילו לך שהם חשבו שאתה סנוב בהתחלה, אבל הוכחת להם שזה רחוק מהמציאות.\n בתיכון ההורים שלך הרסו לך את החיים. לפחות כך חשבת. היית בן חמש-עשרה,\n עברתם דירה מקצה העולם לקצה השני, ונעקרת מכל מה שהיה לך חשוב; בת הזוג שלך, התיכון, החברות והחברים הכי טובים שלך. סוף העולם. ואתה, ששמת מסביבך מחסומים, החלטת שאתה לא מקבל את המקום החדש המעפן הזה שההורים שלך שיגרו אותך אליו. ולמרות הכל לא הצלחת לסגור את עצמך עד הסוף. פשוט כי זה אתה, לא? והכרת עוד\n חברים הכי טובים שנוספו לרשימה. והיית מאושר בכל זאת, לא?\n ביום שהגעת למוסד הלימודים האקדמי משהו השתנה. היה לך קשה לקבל את זה.\n חיפשת אשמים. אולי זה הם, הסטודנטים. אולי זה אתה שעושה משהו לא נכון, אולי זה הרקע שלך ומאיפה שבאת, אולי אתה לא מתחבר איתם תרבותית. אולי הקורונה אשמה ואולי המוסד ודרך הארגון שלו אשמה. מעולם לא ידעת בדידות מהי, מעולם לא ידעת בדידות מהי בקרב אנשים, עד כה. ומכאן והלאה זה השתפר, החמיר, השתפר והחמיר, יום ככה ויום ככה, קורס שבסדר וקורס שאינו בסדר. ואתה תהית האם זה בסדר לדבר על זה ולהציף את זה. זה הביך אותך להודות בכזה דבר, כי אולי זה אומר עלייך משהו. אבל מה אם עוד חשים כמוך? אתה רוצה להאמין שיש עוד שחשים כמוך, שיכולים להזדהות איתך. אולי תמצא אותם, ואולי לא תמצא אותם. אתה רוצה לדבר על זה ובאותה נשימה אתה מפחד לפתוח את זה. אבל נשאר לך רק עוד סמסטר אחד וזה מרגיש נכון, אז אל תפסיק, בינתיים.";
let dots = [];
let harry;

function preload() {
  oldletter = loadImage("oldletter.jpg");
    harry = loadSound("harry.mp3");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textFont("gadi");
  textSize(15);
  textLeading(36);
  textAlign(RIGHT, TOP);
  x = 30;
  y = 35;
}


function mousePressed() {
    if (harry.isPlaying()) {
      // .isPlaying() returns a boolean
      harry.stop();
      background(oldletter);
    } else {
     harry.play();
        document.querySelector("#backgroundMusicPlay").style.display = "none";    
      background(oldletter);
    }
}

document.querySelector("#backgroundMusicPlay").addEventListener("click",(e) => {
    if (harry.isPlaying()) {
      // .isPlaying() returns a boolean
      harry.stop();
      background(oldletter);
    } else {
      harry.play();
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
  const lineSpacing = height / 27;
  for (let i = 0; i < 30; i++) {
    const y = lineSpacing * (i + 0.5);
    line(30, y, width - 20, y);
  }

  // Write the text
  // fill(0);
  // text(displayText, x, y, 650, 1000);
  // if (frameCount % 3 == 0 && currentChar < words.length) {
  //   if (words[currentChar] === "\n") {
  //     displayText += words[currentChar];
  //     currentChar++;
  //     frameCount = 0;
  //   } else {
  //     displayText += words[currentChar];
  //     currentChar++;
  //     frameCount = 0;
  //   }
    fill(0);
  text(displayText, x, y, 650, 1000);
  if (frameCount % 1 == 0) {
    if (displayText.length < words.length) {
      displayText += words[displayText.length];
    } else {
      displayText = ""; // Reset the text to repeat
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

