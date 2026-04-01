let img;
let img2;
let img3;

// Load the image.
function preload() {
  img = loadImage('background.png');
  img2 = loadImage('title.png');
  img3 = loadImage('map.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  
  //background image
   image(img, 0, 0, width, height);
  
  //title
  image(img2, 250, 50);
  
  //map
  image(img3, 700, 10);
}