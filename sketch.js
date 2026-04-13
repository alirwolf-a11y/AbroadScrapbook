let bgImg;

function preload() {
  bgImg = loadImage('img/homebackground.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

   button = createButton("madrid");
  button.position(550, 400);
  button.size(1, 1);
  button.style("font-size", "10px");
  button.mousePressed(() => {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/madrid.html";
  });

   button = createButton("london");
  button.position(700, 200);
  button.size(1, 1);
  button.style("font-size", "10px");
  button.mousePressed(() => {
    window.location.href = "https://alirwolf-a11y.github.io/AbroadScrapbook/london.html";
  });

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
  
  //draws the image to align with the center and be as tall as the width and height of the canvas
  image(bgImg, drawX, drawY, drawW, drawH);
  
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}