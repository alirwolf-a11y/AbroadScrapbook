/**
Combined Typewriter + Background Image
*/

// ---------- TYPEWRITER TEXT ----------
let string = `
London favs!!

Bars & Food: 
Nancy’s pub, redLion, Borough market 

Things to do: 
See Big Ben, National gallery, Royal palace, London eye 

Rating: 5/10
`;

let currentCharacter = 0;
let pageMargin = 25;

// ---------- BACKGROUND IMAGE ----------
let bgImg;

function preload() {
  bgImg = loadImage('img/london.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // ---------- BACKGROUND IMAGE SCALING ----------
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

  // ---------- TYPEWRITER EFFECT ----------
  let currentString = string.substring(0, currentCharacter);

  // Paper background (so text is readable)
  push();
  fill(255, 240); // slight transparency looks nicer over image
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin * 2, height - pageMargin * 2);
  pop();

  // Text
  push();
  textSize(24);
  textFont('Courier');
  textAlign(LEFT, TOP);
  fill(0);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin * 2);
  pop();

  // Typing speed
  currentCharacter += 0.5;
}

// ---------- RESIZE ----------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}