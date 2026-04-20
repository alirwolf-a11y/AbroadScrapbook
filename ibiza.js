
// LOAD BACKGROUND IMAGE
let bgImg;

// IMAGE ARRAY
// This array stores all images that cycle when the user clicks the image
let pictures = [];
let currentImage;
let index = 0;

// HOME BUTTON IMAGE
// Arrow image used for navigation back to the home page
let homeImg;

// TEXT BLURB
// This is the text that appears with the typewriter effect
let string = `
Ibiza favs!!


Clubs:
Pacha, O beach, Hi

Things to do:
playa d’en bossa


Rating: 100/10`;

let currentCharacter = 0;

// RESPONSIVE SCALING 
// ratio ensures everything scales proportionally across screen sizes
let ratio;
const design_w = 1771;
const design_h = 1024;

// HOME BUTTON VARIABLES
// These control the clickable home button in the bottom right corner
let homeX, homeY, homeW, homeH;

function preload() {

  //BACKGROUND IMAGE
  bgImg = loadImage('img/ibiza.png');

  // IMAGE ARRAY
  // These images cycle when the user clicks the main image
  pictures[0] = loadImage("img/ibizapic1.png");
  pictures[1] = loadImage("img/ibizapic2.png");
  pictures[2] = loadImage("img/ibizapic3.png");
  pictures[3] = loadImage("img/ibizapic4.png");
  pictures[4] = loadImage("img/ibizapic5.png");

  // HOME BUTTON ARROW IMAGE
  homeImg = loadImage("img/arrowhome.png");
}

function setup() {

  // RESPONSIVE SCREEN SETUP
  // ratio scales everything based on screen size
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);

  // Set initial image from array
  currentImage = pictures[index];

  // HOME BUTTON POSITION AND SIZE
  homeW = 215 * ratio;
  homeH = 215 * ratio;

  // placed in bottom-right corner
  homeX = width - homeW - (20 * ratio);
  homeY = height - homeH;
}

function draw() {
  background(0);

  // RESPONSIVE BACKGROUND IMAGE
  // This ensures the background fills the screen without distortion
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

  // IMAGE ARRAY LOCATION & SIZE
  imageMode(CENTER);
  image(
    currentImage,
    1185 * ratio,
    430 * ratio,
    414 * ratio,
    552 * ratio
  );

  // CLICK ME TEXT 
  //type, size, location, color
  push();
  textSize(34 * ratio);
  textFont("Courier");
  fill(0);
  textAlign(CENTER, BOTTOM);

  text(
    "<--CLICK ME!",
    1590 * ratio,
    655 * ratio
  );
  pop();

  // TYPEWRITER TEXT BLURB
  let currentString = string.substring(0, currentCharacter);

  //type, size, location, color
  push();
  textSize(26 * ratio);
  textFont("Courier");
  textAlign(LEFT, TOP);

    // TEXT BLURB LOCATION & SIZE
  text(
    currentString,
    560 * ratio,
    285 * ratio,
    440 * ratio,
    520 * ratio
  );
  pop();

  currentCharacter += 0.5;

  // HOME BUTTON
  imageMode(CORNER);
  image(homeImg, homeX, homeY, homeW, homeH);

  // BACK TO HOME TEXT
  //type, size, location, color  
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

function mousePressed() {

  // IMAGE CLICK INTERACTION
  // Each click cycles to the next image in the array
  index++;
  if (index > 4) index = 0;
  currentImage = pictures[index];

  // HOME BUTTON CLICK
  // Redirects user back to the home page
  if (
    mouseX > homeX - (180 * ratio) &&
    mouseX < homeX + homeW &&
    mouseY > homeY &&
    mouseY < homeY + homeH
  ) {
    window.location.href =
      "https://alirwolf-a11y.github.io/AbroadScrapbook/";
  }
}

function windowResized() {

  // RESPONSIVE RESIZE SCREEN
  // recalculates scaling so layout stays responsive
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);

  homeW = 215 * ratio;
  homeH = 215 * ratio;

  homeX = width - homeW - (20 * ratio);
  homeY = height - homeH;
}