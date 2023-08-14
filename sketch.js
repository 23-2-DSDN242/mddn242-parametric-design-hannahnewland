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
  "stop": 65,
  "sizeCircleA": 70,
  "CircleAoffsetX":0,
  "CircleAoffsetY":-30,
  "sizeCircleB": 50,
  "CircleBoffsetX":0,
  "CircleBoffsetY":-30,
  "rectX":-75,
  "rectY":0,
  "rectW":150,
  "rectH":75
  

}

const letterB = {
  "size": 150,
  "offsetx": 30,
  "offsety": -30,
  "start": 270,
  "stop":90,
  "sizeCircleA": 80,
  "CircleAoffsetX":0,
  "CircleAoffsetY":-25,
  "sizeCircleB": 60,
  "CircleBoffsetX":25,
  "CircleBoffsetY":25,
  "rectX":-75,
  "rectY":-75,
  "rectW":75,
  "rectH":150

}

const letterC = {
  "size": 150,
  "offsetx": -30,
  "offsety": 0,
  "start": 60,
  "stop":300,
  "sizeCircleA": 0,
  "CircleAoffsetX":50,
  "CircleAoffsetY":50,
  "sizeCircleB":0,
  "CircleBoffsetX":10,
  "CircleBoffsetY":10,
  "rectX":0,
  "rectY":0,
  "rectW":0,
  "rectH":0
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
  let sizeCircleA = letterData["sizeCircleA"];
  let sizeCircleB = letterData["sizeCircleB"];
  let posAX = posx + letterData["CircleAoffsetX"];
  let posAY = posy + letterData["CircleAoffsetY"];
  let posBX = posx + letterData["CircleBoffsetX"];
  let posBY = posy + letterData["CircleBoffsetY"];
  let rectX = posx + letterData["rectX"];
  let rectY = posy + letterData["rectY"];
  let rectW = letterData["rectW"];
  let rectH = letterData["rectH"];

  // draw two circles
  fill(darkOrange);
  ellipse(posx, posy, 150, 150);
  
  rect(rectX,rectY,rectW,rectH);
  fill(lightOrange);
  arc(posx,posy,size2,size2,start,stop);
  fill(White);
  ellipse(posAX,posAY, sizeCircleA);
  fill(darkOrange);
  ellipse(posBX,posBY,sizeCircleB);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
