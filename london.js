let bgImg;

//image set
let pictures = [];
let currentImage;
let index = 0;

let homeImg;

//text blurb
let string = `
London favs!!

Bars & Food: 
Nancy’s pub, red Lion, Borough Market 

Things to do: 
See Big Ben, National Gallery, Royal Palace, London Eye 

Rating: 5/10`;

let currentCharacter = 0;

// responsive scaling
let ratio;
const design_w = 1771;
const design_h = 1024;

// home button
let homeX, homeY, homeW, homeH;

function preload() {
  bgImg = loadImage('img/london.png');

  // image array
  pictures[0] = loadImage("img/londonpic1.png");
  pictures[1] = loadImage("img/londonpic2.png");
  pictures[2] = loadImage("img/londonpic3.png");

  homeImg = loadImage("img/arrowhome.png");
}

function setup() {
  // screen size
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);

  //image array 
  currentImage = pictures[index];

  // home button size
  homeW = 215 * ratio;
  homeH = 215 * ratio;

  homeX = width - homeW - (20 * ratio);
  homeY = height - homeH;
}

function draw() {
  background(0);

  // background
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

  imageMode(CORNER);
  image(bgImg, drawX, drawY, drawW, drawH);

  // image array location and size
  imageMode(CENTER);
  image(
    currentImage,
    865 * ratio,
    512 * ratio,
    345 * ratio,
    464 * ratio
  );

  // click me text
  push();
  textSize(34 * ratio);
  textFont("Courier");
  fill(0);
  textAlign(CENTER, BOTTOM);

  text(
    "CLICK ME!-->",
    (865 - 350) * ratio,
    (512 + 77) * ratio   // above image
  );
  pop();

  // text blurb
  let currentString = string.substring(0, currentCharacter);

  push();
  textSize(20 * ratio);
  textFont("Courier");
  textAlign(LEFT, TOP);

  //text blurb location and size
  text(
    currentString,
    1150 * ratio,
    340 * ratio,
    400 * ratio,
    520 * ratio
  );
  pop();

  currentCharacter += 0.5;

  // home button arrow
  imageMode(CORNER);
  image(homeImg, homeX, homeY, homeW, homeH);

  // home button text
  push();
  textSize(32 * ratio);
  textFont("Courier");
  fill(0);
  textAlign(RIGHT, CENTER);

  text(
    "BACK TO HOME!",
    homeX,
    homeY + (homeH / 2)
  );
  pop();
}

// image clicking
function mousePressed() {

  // cycle images
  index++;
  if (index > 2) index = 0;
  currentImage = pictures[index];

  // home button click
  if (
    mouseX > homeX - (180 * ratio) &&
    mouseX < homeX + homeW &&
    mouseY > homeY &&
    mouseY < homeY + homeH
  ) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/";
  }
}

// responsive resize screen
function windowResized() {
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);

  homeW = 215 * ratio;
  homeH = 215 * ratio;

  homeX = width - homeW - (20 * ratio);
  homeY = height - homeH;
}