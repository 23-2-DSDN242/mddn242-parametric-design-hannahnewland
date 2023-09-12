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
  "Lblock": 3,
  "TblockSide": 1,

}

const letterB = {

  "PosX4by1": -33,
  "PosY4by1": -133,
  "PosX2by2": 0,
  "PosY2by2": -66,
  
}

const letterC = {
  "Lblock": 1,
 
}

const backgroundColor  = "#F2C9E1";
const strokeColor      = "#000000";

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
  
  angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  angleMode(DEGREES);
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

  let Lblock = letterData ["Lblock"];
  let TblockSide = letterData ["TblockSide"];
  let PosX4by1 = posx + letterData ["PosX4by1"];
  let PosY4by1 = posy + letterData ["PosY4by1"];
  let PosX2by2 = posx + letterData ["PosX2by2"];
  let PosY2by2 = posy + letterData ["PosY2by2"];
  
  
  
fill(lightOrange);


if(TblockSide == 1){

  push();
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
pop();
}


rect(PosX2by2, PosY2by2, 66,66);

fill(darkOrange);

if(Lblock == 1){
  
 beginShape();
vertex(posx-33,posy);
vertex(posx-33,posy-100);
vertex(posx+33,posy-100);
vertex(posx+33,posy-66);
vertex(posx,posy-66);
vertex(posx,posy);
vertex(posx-33,posy);
endShape();
} else if (Lblock == 2){

  beginShape();
  vertex(posx-33,posy-66);
  vertex(posx-33,posy-100);
  vertex(posx+66,posy-100);
  vertex(posx+66,posy-33);
  vertex(posx+33,posy-33);
  vertex(posx+33,posy-66);
  vertex(posx-33,posy-66);
  endShape();
}else if (Lblock == 3){

  beginShape();
  vertex(posx,posy);
  vertex(posx,posy-33);
  vertex(posx+33,posy-33);
  vertex(posx+33,posy-100);
  vertex(posx+66,posy-100);
  vertex(posx+66,posy);
  vertex(posx,posy);
  endShape();


}


rect(PosX4by1,PosY4by1,33,133);


  

  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
