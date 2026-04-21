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
Portugal favs!!

Bars & Food:
Sexy pina coladas, buna cafe, The burger, Yo sushi

Things to do:
Pink street, Sexiest WC on earth, Miradouro Santa Catarina, Praca do Comercio, Igreja de Santo Antonio, Booze cruise, Fishermen’s trails

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

// SKYDIVING CAMERA FEATURE
// Clickable camera image that links to side quest page
let skydivingImg;
let skyX, skyY, skyW, skyH;

function preload() {

  //BACKGROUND IMAGE
  bgImg = loadImage('img/portugal.png');

  // IMAGE ARRAY
  // These images cycle when the user clicks the main image
  pictures[0] = loadImage("img/portugalpic1.png");
  pictures[1] = loadImage("img/portugalpic2.png");
  pictures[2] = loadImage("img/portugalpic3.png");
  pictures[3] = loadImage("img/portugalpic4.png");
  pictures[4] = loadImage("img/portugalpic5.png");
  pictures[5] = loadImage("img/portugalpic6.png");

  // HOME BUTTON ARROW IMAGE
  homeImg = loadImage("img/arrowhome.png");

  // SKYDIVING CAMERA IMAGE
  skydivingImg = loadImage("img/skydivingcamera.png");
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

  // SKYDIVING CAMERA POSITION & SIZE
  skyW = 134 * ratio;
  skyH = 113 * ratio;

  // placed toward bottom-left area of screen
  skyX = 222 * ratio;
  skyY = height - (75 * ratio);
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
    1280 * ratio,
    484 * ratio,
    385 * ratio,
    545 * ratio
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
    1631 * ratio,
    589 * ratio
  );
  pop();

  // TYPEWRITER TEXT BLURB
  let currentString = string.substring(0, currentCharacter);

  //type, size, location, color
  push();
  textSize(20 * ratio);
  textFont("Courier");
  textAlign(LEFT, TOP);

    // TEXT BLURB LOCATION & SIZE
  text(
    currentString,
    610 * ratio,
    355 * ratio,
    440 * ratio,
    520 * ratio
  );
  pop();

  currentCharacter += 0.5;

// SKYDIVING CAMERA IMAGE
imageMode(CENTER);
image(
  skydivingImg,
  skyX,
  skyY,
  skyW,
  skyH
  );

  // SKYDIVING TEXT NEXT TO CAMERA
  push();
  textSize(22 * ratio);
  textFont("Courier");
  fill(0);
  textAlign(LEFT, CENTER);

  text(
    "click the camera to check out a little side quest we went on...",
    308 * ratio,
    893 * ratio,
    500 * ratio,
    113 * ratio
  );
  pop();

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
  if (index > 5) index = 0;
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

  // SKYDIVING CAMERA CLICK
  if (
    mouseX > skyX - (skyW / 2) &&
    mouseX < skyX + (skyW / 2) &&
    mouseY > skyY - (skyH / 2) &&
    mouseY < skyY + (skyH / 2)
  ) {
    window.location.href =
      "https://alirwolf-a11y.github.io/AbroadScrapbook/skydiving.html";
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

  skyW = 134 * ratio;
  skyH = 113 * ratio;

  skyX = 222 * ratio;
  skyY = height - (75 * ratio);
}