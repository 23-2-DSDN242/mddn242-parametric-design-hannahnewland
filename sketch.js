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
  "LblockReverse": yes,
}

const letterB = {
  

}

const letterC = {
  "LblockReverse": yes,
}

const backgroundColor  = "#F2C9E1";
const strokeColor      = "#03045e";

const darkOrange  = "#E94D29";
const lightOrange  = "#F0A10B";
const White = "#90e0tf";

function setup () {

  angleMode(DEGREES);
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  

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

  let LblockReverse = letterData ["LblockReverse"];
  
  
fill(lightOrange);


beginShape();
vertex(posx +33, posy);
vertex(posx + 66, posy);
vertex(posx+66,posy-100);
vertex(posx+33, posy-100);
vertex(posx+33, posy-66);
vertex(posx,posy-66);
vertex(posx,posy-33);
vertex(posx+33,posy-33);
vertex(posx+33,posy);
endShape();
fill(darkOrange);

if(LblockReverse == yes){

 beginShape();
vertex(posx-33,posy);
vertex(posx-33,posy-100);
vertex(posx+33,posy-100);
vertex(posx+33,posy-66);
vertex(posx,posy-66);
vertex(posx,posy);
vertex(posx-33,posy);
endShape();
}



  

  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
