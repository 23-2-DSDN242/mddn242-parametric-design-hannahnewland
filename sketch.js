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
  "Lblock": 1,
  "TblockSide": 1,

}

const letterB = {

  "PosX4by1": -33,
  "PosX2by2": 0,
  "PosY2by2": -66,
  
}

const letterC = {
  "Lblock": 1,
  "PosX1by1": 33,
  "PosY1by1": -100,
  "block2by1": 2,
  "PosX2by1": 0,
  "PosY2by1": -33,
 
}

const backgroundColor  = "#F2C9E1";
const strokeColor      = "#000000";

const SfromRightBlockFill = "#E43430"; //red
const ReverseLBlockFill = "#F49941"; //orange
const LBlockFill = "#FFED4E"; //yellow
const TBlockFill = "#4DB270"; //green
const SfromLeftBlockFill = "#53BBB3" //teal
const TwobyTwoBlockFill = "#3D8DCC" //blue
const TwobyOneBlockFill = "#6371B5" //indigo
const OnebyOneBlockFill = "#7962A8" //violet
const FourbyOneBlockFill = "#ED6D9B" //pink

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
  let PosX2by2 = posx + letterData ["PosX2by2"];
  let PosY2by2 = posy + letterData ["PosY2by2"];
  let PosX1by1 = posx +letterData ["PosX1by1"];
  let PosY1by1 = posy +letterData ["PosY1by1"];
  let block2by1 = letterData ["block2by1"];
  let PosX2by1 = posx + letterData ["PosX2by1"];
  let PosY2by1 = posy +letterData ["PosY2by1"];
  
  
  
  
fill(TBlockFill);


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

fill(TwobyTwoBlockFill);
rect(PosX2by2, PosY2by2, 66,66);

fill(ReverseLBlockFill);

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

}else if (Lblock == 4){
  beginShape();
  vertex(posx-33,posy);
  vertex(posx-33,posy-66);
  vertex(posx,posy-66);
  vertex(posx,posy-33);
  vertex(posx+66,posy-33);
  vertex(posx+66,posy);
  vertex(posx-33,posy);
  endShape();


}

fill(FourbyOneBlockFill);
rect(PosX4by1,posy -133,33,133);

fill(OnebyOneBlockFill);
rect(PosX1by1, PosY1by1, 34);

fill(TwobyOneBlockFill);
  if(block2by1 == 1){
    rect(PosX2by1, PosY2by1,33,66);
  }else if (block2by1 == 2){
    rect(PosX2by1, PosY2by1,66,33);
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
