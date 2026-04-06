let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;

// Load the image.
function preload() {
  img = loadImage('background.png');
  img2 = loadImage('madrid.png');
  img3 = loadImage('mad_date.png');
  img4 = loadImage('Mad_notes1.png');
  img5 = loadImage('Mad_notes2.png');
  img6 = loadImage('Mad_pic1.png');
  img7 = loadImage('Mad_pic2.png');
  img8 = loadImage('pin.png');

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
  
  //date
  image(img3, 500, 50);
  
  //notes
  image(img4, 700, 100);
  
  //notes2
  image(img5, 100, 500);
  
  //pic
  image(img6, 700, 500);
  
  //pic2
  image(img7, 100, 100);
    
  //pin
  image(img8, 900, 900);
}