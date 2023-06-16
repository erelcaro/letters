let canvasWidth = 700;
let canvasHeight = 1000;
let displayText = "";
let currentChar = 0;
let words =
  "יש מעט מאוד מקומות שאפשר להתבודד בהם בבצלאל החדש. כמעט בכל קומה אפשר לשבת לבד. בעצם, תלוי בשעה; לעיתים יש שולחנות ריקים בקפיטריה, בספרייה, במרפסות, (אלו שיש אליהן יציאה), ותמיד יש מקום על הרצפה או על הספסלים שמחוץ למבנה. אבל להיות לגמרי לבד? ובכן, יש מעט מקומות שמאפשרים התבודדות מלאה. אם את בשנה א', אנחנו די באותו המצב. טוב, אולי בתאי השירותים, במעליות, ובמדרגות החירום תוכלי למצוא את עצמך לגמרי לבד. אבל אני בטוחה שזה לא יעורר בך את  הנוחות שאת מחפשת הרי. המלצתי? אם קצת נמאס לך להסתובב בין זכוכיות ולהיות נצפית בכל עת, תוכלי לרדת לקומות מינוס אחת ושתיים. שם אפילו תמצאי ספות בצבעים, כתומות וירוקות, די נוחות, להעביר בהן את מנוחתך. אמנם זה באמצע המסדרון, וכולם יוכלו לראות אותך על אף שישנן פינות מעין נסתרות אך גלויות. בכל אופן, תמיד תהיי גלויה לעיני כל ולא תוכלי להתחמק מזה. החיובי שבדבר? לא קשה למצוא כאן את חברייך כלל. השלילי? בהצלחה בניסיון ההימנעות ממפגש עם מכרים שאין לך כל שיחה איתם. אם אי פעם חשת בדידות, הן בקרבם של אנשים, והן כשהיית לבדך, שתדעי שאת לא לבד. באמת. כולנו חשים רגעים כאלו בחיים, בכל זאת, שנות התואר הביאו עלינו מנעד רחב של רגשות. אם זה כשחבורות מסתודדות להן בבדיחות פרטיות ואת לצידן, חצי שותקת חצי מחייכת כדי לחוש שייכת, אם זה בעת שאת חווה סערה רגשית שלדעתך אין שום סיכוי שאף אחד בעולם יבין אותך, ואת מעדיפה לצלול לעולם של בדידות. כן, יש אלפי חוויות, רגשות, ותחושות שעלולות לגרום לך לחוש בודדה. ולהגיד לך את האמת? אין לי פתרון בשבילך. כי אם היה לי הייתי נאחזת בו בכל כוחי בעצמי. אבל בהחלט יש כל מיני דרכים להפיג את הבדידות ולמצוא בה את החיובי. את בטח תשאלי, מה הרעיון לכתוב על זה ספר שלם, לנקז אליו את כל שנותייך האקדמיות, ולעגן אותו בשני מושגים כה רחבים? בדידות והתבודדות ואני אענה לך. אולי אם זו הייתה רק אני הייתי שותקת. לבדידות יש שתי פנים, עולם של הרס עצמי ועולם של יצירה, ולפעמים הבדידות היא מקור בריאת היצירה, ולפעמים היא הופכת אותך למוזרה, לאאוטסיידרית. הבדידות היא אם כל חששותיי ואם כל יצירותיי והיא עולמו של האחר, עולמו של היוצר. לא רק שלי, של עוד יוצרים רבים. ועל כן, מכתב זה אלייך. כדי שתדעי, וכן, הכי קלישאתי, שאת לא לבד.";
let dots = [];
let harry;


function preload() {
  letter1 = loadImage("letter1.jpg");
  harry = loadSound("harry.mp3");
}

function setup() {
  // clair  = loadSound('assets/CLAIR.mp3')
  createCanvas(canvasWidth, canvasHeight);
  textFont("heshbon");
  textSize(20);
  textLeading(36);
  textAlign(RIGHT, TOP);
  x = 20;
  y = 80;
}
function mousePressed() {
    if (harry.isPlaying()) {
      // .isPlaying() returns a boolean
      harry.stop();
      background(letter1);
    } else {
     harry.play();
        document.querySelector("#backgroundMusicPlay").style.display = "none";    
      background(letter1);
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
  background(letter1);
  noFill();
  stroke(0, 100);
  // rect(15, 15, 670, 970);
  stroke(0);
  if (mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  stroke(0, 40);
  const lineSpacing = height / 30;
  for (let i = 0; i < 30; i++) {
    const y = lineSpacing * (i + 0.5);
    line(30, y, width - 20, y);
  }

  // Write the text
  fill(0);
  text(displayText, x, y, 650, 1000);
  if (frameCount % 5 == 0) {
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

