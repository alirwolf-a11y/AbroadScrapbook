let img;

// Load the image.
function preload() {
  img = loadImage('background.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  
  //background image
   image(img, 0, 0, width, height);
}