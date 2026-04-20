// LOAD BACKGROUND IMAGE
let bgImg;


// RESPONSIVE SCALING
// ratio ensures everything scales proportionally across screen sizes
let ratio;
const design_w = 1771;
const design_h = 1024;

// CLICKABLE TEXT POSITION VARIABLES
// these store the x and y positions for each label
let madridX, madridY;
let londonX, londonY;
let maltaX, maltaY; 

function preload() {
  //BACKGROUND IMAGE
  bgImg = loadImage('img/homebackground.png');
}


function setup() {

  // RESPONSIVE SCREEN SETUP
  // ratio scales everything based on screen size
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  createCanvas(design_w * ratio, design_h * ratio);

  // TEXT POSITIONS
  // positions are based on coordinates, then multiplied by ratio to stay responsive

  madridX = 840 * ratio;
  madridY = 585 * ratio;

  londonX = 1030 * ratio;
  londonY = 295 * ratio;

  maltaX = 1290 * ratio;
  maltaY = 835 * ratio;
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

  image(bgImg, drawX, drawY, drawW, drawH);

  // CLICKABLE TEXT LABELS
    //type, size, location, color
  push();
  textFont("Courier");
  textSize(18 * ratio); 
  fill(0);
  textAlign(CENTER, CENTER);

  // draw labels on the screen
  text("Madrid", madridX, madridY);
  text("London", londonX, londonY);
  text("Malta", maltaX, maltaY);

  pop();
}

function mousePressed() {

  // MADRID CLICK
  // checks if mouse is within a circular area around the text, takes you to each page
  if (dist(mouseX, mouseY, madridX, madridY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/madrid.html";
  }

  // LONDON CLICK
  if (dist(mouseX, mouseY, londonX, londonY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/london.html";
  }

  // MALTA CLICK
  if (dist(mouseX, mouseY, maltaX, maltaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/malta.html";
  }
}

function windowResized() {

  // RESPONSIVE RESIZE SCREEN
  // recalculates scaling so layout stays responsive
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);

  // UPDATE TEXT POSITIONS
  // must be recalculated so elements stay in correct positions

  madridX = 840 * ratio;
  madridY = 585 * ratio;

  londonX = 1030 * ratio;
  londonY = 295 * ratio;

  maltaX = 1290 * ratio;
  maltaY = 835 * ratio;
}