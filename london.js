let bgImg;
var pictures = [];
var currentImage;
var index = 0;
let string = `
London favs!!

Bars & Food: 
Nancy’s pub, redLion, Borough market 

Things to do: 
See Big Ben, National gallery, Royal palace, London eye 


Rating: 5/10`; 

let currentCharacter = 0;
let pageMargin = 25;

function preload() {
  bgImg = loadImage('img/london.png');
   pictures[0] = loadImage("img/londonpic1.png");
  pictures[1] = loadImage("img/londonpic2.png");
  pictures[2] = loadImage("img/londonpic3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentImage = pictures[index];
}

function draw() {
  // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = bgImg.width / bgImg.height;
  
  // here you define the aspect ratio of the canvas
  let canvasRatio = width / height;
  
  // here you are creating variables that can be used to adjust the background image to the canvas ratio
  let drawW, drawH, drawX, drawY;
  
  if (canvasRatio > imgRatio) {
    // if the canvas is wider than image ratio then fit to width
    drawW = width;
    drawH = width / imgRatio;
  } else {
    // if the canvas is taller than image ratio — fit to height
    drawH = height;
    drawW = height * imgRatio;
  }

  // centers the image to the canvas
  drawX = (width - drawW) / 2;
  drawY = (height - drawH) / 2;
  
  // draws the image to align with the center and be as tall as the width and height of the canvas
  imageMode(CORNER);
  image(bgImg, drawX, drawY, drawW, drawH);
  imageMode(CENTER);
  image(currentImage, width / 2.05, height / 2, 297.4, 400);

    // Work out the current string we're writing (the substring of the full string that the typewriter has written so far)
  // The substring() method will return all the characters of a string
  // between the starting and ending positions (starts at 0)
  let currentString = string.substring(0, currentCharacter);
  
  // Draw a sheet of paper (using the pageMargin variable)
  // push();
  // fill(255);
  // noStroke();
  // rect(width/2, height/2, 400, 400);
  // pop();
  
  // Draw the current string on the page, with some margins
  push();
  textSize(14);
  textFont(`Courier`);
  textAlign(LEFT, TOP);
  text(currentString, width/1.5, height/3, 300 , 400);
  pop();
  
  // Increase the current character so that we get a longer and
  // longer substring above. Using fractional numbers allows us to
  // slow down the pace.
  currentCharacter += 0.5;
  // currentCharacter += random(0,0.5); // Try adding random amounts for a more "naturalistic" pace of typing
}

function mousePressed() {
  index = index + 1;

  if (index > 2) {
    index = 0;
  }

  currentImage = pictures[index];

  console.log("picture " + (index + 1));
}

// this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}