const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 150,
  "offsetx": 0,
  "offsety": -30,
  "start": 115,
  "stop": 65
}

const letterB = {
  "size": 150,
  "offsetx": 30,
  "offsety": -30,
  "start": 205,
  "stop":155
}

const letterC = {
  "size": 150,
  "offsetx": -30,
  "offsety": 0,
  "start": 25,
  "stop":335
}

const backgroundColor  = "#F2C9E1";
const strokeColor      = "#03045e";

const darkOrange  = "#E94D29";
const lightOrange  = "#F0A10B";
const White = "#90e0tf";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let start = radians(letterData["start"]);
  let stop = radians(letterData["stop"]);

  // draw two circles
  fill(darkOrange);
  ellipse(posx, posy, 150, 150);
  rect(posx-75,posy,150,75);
  fill(lightOrange);
  arc(posx,posy,size2,size2,start,stop);
  fill(White);
  ellipse(pos2x,pos2y, 50,50);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
