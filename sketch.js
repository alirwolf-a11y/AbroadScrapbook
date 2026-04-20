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
let sevillaX, sevillaY;
let budapestX, budapestY;
let valenciaX, valenciaY;
let moroccoX, moroccoY;
let dublinX, dublinY;
let barcelonaX, barcelonaY;
let canaryX, canaryY;
let romeX, romeY;
let amalfiX, amalfiY;
let interlakenX, interlakenY;
let portugalX, portugalY;
let skydivingX, skydivingY;
let amsterdamX, amsterdamY;
let mallorcaX, mallorcaY;
let ibizaX, ibizaY;
let florenceX, florenceY;

function preload() {
  // BACKGROUND IMAGE
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
  madridY = 587 * ratio;

  londonX = 1035 * ratio;
  londonY = 297 * ratio;

  maltaX = 1290 * ratio;
  maltaY = 835 * ratio;

  sevillaX = 790 * ratio; 
  sevillaY = 649 * ratio;

  budapestX = 1445 * ratio;
  budapestY = 495 * ratio;
  
  valenciaX = 882 * ratio; 
  valenciaY = 634 * ratio;

  moroccoX = 722 * ratio; 
  moroccoY = 790 * ratio;

  dublinX = 920 * ratio; 
  dublinY = 200 * ratio;

  barcelonaX = 958 * ratio; 
  barcelonaY = 588 * ratio;

  canaryX = 510 * ratio; 
  canaryY = 842 * ratio;

  romeX = 1291 * ratio; 
  romeY = 629 * ratio;

  amalfiX = 1273 * ratio; 
  amalfiY = 679 * ratio;

  interlakenX = 1192 * ratio; 
  interlakenY = 472 * ratio;

  portugalX = 697 * ratio; 
  portugalY = 572 * ratio;

  skydivingX = 630 * ratio; 
  skydivingY = 633 * ratio;

  amsterdamX = 1165 * ratio; 
  amsterdamY = 299 * ratio;

  mallorcaX = 1005 * ratio; 
  mallorcaY = 678 * ratio;

  ibizaX = 938 * ratio; 
  ibizaY = 682 * ratio;

  florenceX = 1260 * ratio; 
  florenceY = 580 * ratio;
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
  // type, size, location, color
  push();
  textFont("Courier");
  textSize(12 * ratio);
  fill(0);
  textAlign(CENTER, CENTER);

  // draw text on the screen

  text("Madrid", madridX, madridY);
  text("London", londonX, londonY);
  text("Malta", maltaX, maltaY);
  text("Sevilla", sevillaX, sevillaY);
  text("Budapest", budapestX, budapestY);
  text("Valencia", valenciaX, valenciaY);
  text("Morocco", moroccoX, moroccoY);
  text("Dublin", dublinX, dublinY);
  text("Barcelona", barcelonaX, barcelonaY);
  text("Canary Islands", canaryX, canaryY);
  text("Rome", romeX, romeY);
  text("Amalfi Coast", amalfiX, amalfiY);
  text("Interlaken", interlakenX, interlakenY);
  text("Portugal", portugalX, portugalY);
  text("Skydiving", skydivingX, skydivingY);
  text("Amsterdam", amsterdamX, amsterdamY);
  text("Mallorca", mallorcaX, mallorcaY);
  text("Ibiza", ibizaX, ibizaY);
  text("Florence", florenceX, florenceY);

  pop();
}

function mousePressed() {
  
  // CLICK ON EACH WORD
  // checks if mouse is within a circular area around the text, takes you to each page

  if (dist(mouseX, mouseY, madridX, madridY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/madrid.html";
  }

  if (dist(mouseX, mouseY, londonX, londonY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/london.html";
  }

  if (dist(mouseX, mouseY, maltaX, maltaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/malta.html";
  }

  if (dist(mouseX, mouseY, sevillaX, sevillaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/sevilla.html";
  }

  if (dist(mouseX, mouseY, budapestX, budapestY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/budapest.html";
  }

  if (dist(mouseX, mouseY, valenciaX, valenciaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/valencia.html";
  }

  if (dist(mouseX, mouseY, moroccoX, moroccoY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/morocco.html";
  }

  if (dist(mouseX, mouseY, dublinX, dublinY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/dublin.html";
  }

  if (dist(mouseX, mouseY, barcelonaX, barcelonaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/barcelona.html";
  }

  if (dist(mouseX, mouseY, canaryX, canaryY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/canaryislands.html";
  }

  if (dist(mouseX, mouseY, romeX, romeY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/rome.html";
  }

  if (dist(mouseX, mouseY, amalfiX, amalfiY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/amalficoast.html";
  }

  if (dist(mouseX, mouseY, interlakenX, interlakenY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/interlaken.html";
  }

  if (dist(mouseX, mouseY, portugalX, portugalY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/portugal.html";
  }

  if (dist(mouseX, mouseY, skydivingX, skydivingY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/skydiving.html";
  }

  if (dist(mouseX, mouseY, amsterdamX, amsterdamY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/amsterdam.html";
  }

  if (dist(mouseX, mouseY, mallorcaX, mallorcaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/mallorca.html";
  }

  if (dist(mouseX, mouseY, ibizaX, ibizaY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/ibiza.html";
  }

  if (dist(mouseX, mouseY, florenceX, florenceY) < 80 * ratio) {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/florence.html";
  }
}

function windowResized() {

  // RESPONSIVE RESIZE SCREEN
  // recalculates scaling so layout stays responsive
  ratio = min(windowWidth / design_w, windowHeight / design_h);
  resizeCanvas(design_w * ratio, design_h * ratio);

  // update text positions so everything stays aligned

  madridX = 840 * ratio;
  madridY = 587 * ratio;

  londonX = 1035 * ratio;
  londonY = 297 * ratio;

  maltaX = 1290 * ratio;
  maltaY = 835 * ratio;

  sevillaX = 790 * ratio; 
  sevillaY = 649 * ratio;

  budapestX = 1445 * ratio;
  budapestY = 495 * ratio;
  
  valenciaX = 882 * ratio; 
  valenciaY = 634 * ratio;

  moroccoX = 722 * ratio; 
  moroccoY = 790 * ratio;

  dublinX = 920 * ratio; 
  dublinY = 200 * ratio;

  barcelonaX = 958 * ratio; 
  barcelonaY = 588 * ratio;

  canaryX = 510 * ratio; 
  canaryY = 842 * ratio;

  romeX = 1291 * ratio; 
  romeY = 629 * ratio;

  amalfiX = 1273 * ratio; 
  amalfiY = 679 * ratio;

  interlakenX = 1192 * ratio; 
  interlakenY = 472 * ratio;

  portugalX = 697 * ratio; 
  portugalY = 572 * ratio;

  skydivingX = 630 * ratio; 
  skydivingY = 633 * ratio;

  amsterdamX = 1165 * ratio; 
  amsterdamY = 299 * ratio;

  mallorcaX = 1005 * ratio; 
  mallorcaY = 678 * ratio;

  ibizaX = 938 * ratio; 
  ibizaY = 682 * ratio;

  florenceX = 1260 * ratio; 
  florenceY = 580 * ratio;
}