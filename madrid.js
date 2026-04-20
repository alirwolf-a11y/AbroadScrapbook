// LOAD BACKGROUND IMAGE
let bgImg;

// IMAGE SET 1 (LEFT GALLERY)
// This array stores all images for the first image set 
let pictures1 = [];
let index1 = 0; 
let currentImage1; 

// IMAGE SET 2 (RIGHT GALLERY)
// This array stores all images for the second image set 
let pictures2 = [];
let index2 = 0;
let currentImage2;

// TEXT STRING 1 (MADRID DESCRIPTION)
// This is the first text string using the typewriter effect
let string1 = `
Madrid was my home base!!! Here are some of the things I missed the most

Clubs & Bars: 
Barcelo, Rubicon, Icon, Despecho, Kapital, Oasis, Vandido, Fucking Mondays, Goya, Istar, Chupitos shot bar, Lovo bar, Dubliners, Wanderlust, Bad company, Ficus, RIU, Absent, La Fontana, Mauz, Jacks library. 

Places to go: 
Plaza mayor, Royal palace, Sol, Gran via, Reina Sofia museum, Prado, Retiro park, Malasaña, Salamanca, Casa de campo, el rastreo flea market, Humana, Mango, Subdued, Principe pio mall, Normal, Primark, Nude Project

Rating: 100000/10!!!!!`;

let currentCharacter1 = 0;

// TEXT STRING 2 (FOOD PLACES)
// This is the second text string using the typewriter effect
let string2 = `
Here are some of my favorite food spots!!!

El Rey de los tacos, tiki taco, TKO taco, Bresca, Naked and sated, Honest greens, Oven, Bakan, 100 montaditos, Cafe & Te, C&Tapas, Rodilla, Majaderitos, Obsesion brunch, 10 con 10, Sushiaoi, Myka fro yo, 80 grados, El Corte ingles, Mercadona, Poke house, Mercado de San Miguel, Mercado de San Ildefonso, Sumo sushi, Apetitoh, Amazonia, Goconut, Tierra`;

let currentCharacter2 = 0;

// RESPONSIVE SCALING
// This ensures everything scales proportionally on different screen sizes
let ratio;
const design_w = 1771;
const design_h = 1024;

// HOME BUTTON VARIABLES
// These control the clickable home button in the bottom right corner
let homeImg;
let homeX, homeY, homeW, homeH;

function preload() {

  //BACKGROUND IMAGE
  bgImg = loadImage('img/madrid.png');

  // IMAGE SET 1 (MADRID PICS)
  // These are photos that appear in the left image array
  pictures1[0] = loadImage("img/madridpic1.png");
  pictures1[1] = loadImage("img/madridpic2.png");
  pictures1[2] = loadImage("img/madridpic3.png");
  pictures1[3] = loadImage("img/madridpic4.png");
  pictures1[4] = loadImage("img/madridpic5.png");
  pictures1[5] = loadImage("img/madridpic6.png");
  pictures1[6] = loadImage("img/madridpic7.png");
  pictures1[7] = loadImage("img/madridpic8.png");
  pictures1[8] = loadImage("img/madridpic9.png");
  pictures1[9] = loadImage("img/madridpic10.png");
  pictures1[10] = loadImage("img/madridpic11.png");
  pictures1[11] = loadImage("img/madridpic12.png");
  pictures1[12] = loadImage("img/madridpic13.png");

  // IMAGE SET 2 (FOOD PICS)
  // These are photos that appear in the right image array
  pictures2[0] = loadImage("img/madridfood1.png");
  pictures2[1] = loadImage("img/madridfood2.png");
  pictures2[2] = loadImage("img/madridfood3.png");
  pictures2[3] = loadImage("img/madridfood4.png");
  pictures2[4] = loadImage("img/madridfood5.png");
  pictures2[5] = loadImage("img/madridfood6.png");
  pictures2[6] = loadImage("img/madridfood7.png");
  pictures2[7] = loadImage("img/madridfood8.png");
  pictures2[8] = loadImage("img/madridfood9.png");

  // HOME BUTTON ARROW IMAGE
  homeImg = loadImage("img/arrowhome.png");
}

function setup() {
  // RESPONSIVE SCREEN SETUP
  // ratio scales everything based on screen size
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);

  // Set initial image for both arrays
  currentImage1 = pictures1[index1];
  currentImage2 = pictures2[index2];

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
    // ensures background image fills screen without distortion
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

  // LEFT IMAGE ARRAY LOCATION & SIZE
  imageMode(CENTER);
  image(
    currentImage1,
    500 * ratio,
    455 * ratio,
    292 * ratio,
    388 * ratio
  );

  // CLICK ME TEXT 
  //type, size, location, color
  push();
  textSize(34 * ratio);
  textFont("Courier");
  fill(0);
  textAlign(CENTER, BOTTOM);
  text("<--CLICK ME!-->", 860 * ratio, (510 - 220) * ratio);
  pop();

  // TYPEWRITER TEXT BLURB 1
  let currentString1 = string1.substring(0, currentCharacter1);

  //type, size, location, color
  push();
  textSize(12 * ratio);
  textFont("Courier");
  textAlign(LEFT, TOP);
  text(currentString1, 730 * ratio, 340 * ratio, 300 * ratio, 600 * ratio);
  pop();

  currentCharacter1 += 0.5;

  // LEFT IMAGE ARRAY LOCATION & SIZE
  image(
    currentImage2,
    1216 * ratio,
    335 * ratio,
    297 * ratio,
    225 * ratio
  );

  // TYPEWRITER TEXT BLURB 2
  let currentString2 = string2.substring(0, currentCharacter2);

  //type, size, location, color
  push();
  textSize(14 * ratio);
  textFont("Courier");
  textAlign(LEFT, TOP);
  text(currentString2, 1160 * ratio, 492 * ratio, 300 * ratio, 520 * ratio);
  pop();

  currentCharacter2 += 0.5;

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
  text("BACK TO HOME!", homeX, homeY + (homeH / 2));
  pop();
}

function mousePressed() {

  // LEFT IMAGE CLICK DETECTION
  // If user clicks on left image area, it cycle through pictures1
  if (
    mouseX > (500 - 150) * ratio &&
    mouseX < (500 + 150) * ratio &&
    mouseY > (455 - 200) * ratio &&
    mouseY < (455 + 200) * ratio
  ) {
    index1++;
    if (index1 >= pictures1.length) index1 = 0;
    currentImage1 = pictures1[index1];
  }

  // RIGHT IMAGE CLICK DETECTION
  // If user clicks on left image area, it cycle through pictures2
  if (
    mouseX > (1200 - 150) * ratio &&
    mouseX < (1200 + 150) * ratio &&
    mouseY > (455 - 200) * ratio &&
    mouseY < (455 + 200) * ratio
  ) {
    index2++;
    if (index2 >= pictures2.length) index2 = 0;
    currentImage2 = pictures2[index2];
  }

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