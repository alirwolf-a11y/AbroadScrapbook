let img;
let img2;
let img3;

// Load the image.
function preload() {
  img = loadImage('img/background.png');
  img2 = loadImage('img/title.png');
  img3 = loadImage('img/map.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(img);
    
  //title
  image(img2, width/10, 50);
  
  //map
  image(img3, 700, 10);
}