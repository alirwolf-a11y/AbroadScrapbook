/**
Typewriter + Background Image (Small Text Area)
*/

let string = `
London favs!!

Bars & Food: 
Nancy’s pub, redLion, Borough market 

Things to do: 
See Big Ben, National gallery, Royal palace, London eye 

Rating: 5/10
`;

let currentCharacter = 0;

// Background image
let bgImg;

function preload() {
  bgImg = loadImage('img/london.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // ---------- BACKGROUND IMAGE ----------
  let imgRatio = bgImg.width / bgImg.height;
  let canvasRatio = width / height;

  let drawW, drawH, drawX, drawY;

  if (canvasRatio > imgRatio) {
    drawW = width;
    drawH = width / imgRatio;
  } else {
    drawH = height;
    drawW = height * imgRatio;
  }

  drawX = (width - drawW) / 2;
  drawY = (height - drawH) / 2;

  image(bgImg, drawX, drawY, drawW, drawH);

  // ---------- TYPEWRITER TEXT ----------
  let currentString = string.substring(0, currentCharacter);

  push();
  textSize(20);
  textFont('Courier');
  textAlign(LEFT, TOP);
  fill(255); // change to 0 if background is light

  // 👇 POSITION + SIZE (adjust these!)
  let x = 50;     // left/right position
  let y = 50;     // up/down position
  let w = 300;    // width of text box
  let h = 200;    // height of text box

  text(currentString, x, y, w, h);
  pop();

  // typing speed
  currentCharacter += 0.5;
}

// Resize canvas with window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}