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
  "xposblock1":0,
  "yposblock1":0,
  "xposblock2":-30,
  "yposblock2":-20,
  "xposhalfblock1":-15,
  "yposhalfblock1":0,
  "xpoint1downfromlefttri1":-15,
  "ypoint1downfromlefttri1":0,
  "xpoint2downfromlefttri1":-15,
  "ypoint2downfromlefttri1":20,
  "xpoint3downfromlefttri1":-30,
  "ypoint3downfromlefttri1":0,
 

  

}

const letterB = {
"xposblock1":0,
"yposblock1":0,

}

const letterC = {
  "xposblock1":0,
"yposblock1":0,

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

  let xposblock1 = posx + letterData["xposblock1"];
  let yposblock1 = posy + letterData["yposblock1"];
  let xposblock2 = posx + letterData["xposblock2"];
  let yposblock2 = posy + letterData["yposblock2"];

  let xposhalfblock1 = posx + letterData ["xposhalfblock1"];
  let yposhalfblock1 = posy + letterData ["yposhalfblock1"];

  let xpoint1downfromlefttri1 = posx + letterData ["xpoint1downfromlefttri1"];
  let ypoint1downfromlefttri1 = posy + letterData ["ypoint1downfromlefttri1"];
  let xpoint2downfromlefttri1 = posx + letterData ["xpoint2downfromlefttri1"];
  let ypoint2downfromlefttri1 = posy + letterData ["ypoint2downfromlefttri1"];
  let xpoint3downfromlefttri1 = posx + letterData ["xpoint3downfromlefttri1"];
  let ypoint3downfromlefttri1 = posy + letterData ["ypoint3downfromlefttri1"];
  // let size2 = letterData["size"];
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];

  // let start = radians(letterData["start"]);
  // let stop = radians(letterData["stop"]);
  // let sizeCircleA = letterData["sizeCircleA"];
  // let sizeCircleB = letterData["sizeCircleB"];
  // let posAX = posx + letterData["CircleAoffsetX"];
  // let posAY = posy + letterData["CircleAoffsetY"];
  // let posBX = posx + letterData["CircleBoffsetX"];
  // let posBY = posy + letterData["CircleBoffsetY"];
  // let rectX = posx + letterData["rectX"];
  // let rectY = posy + letterData["rectY"];
  // let rectW = letterData["rectW"];
  // let rectH = letterData["rectH"];

  fill(darkOrange);
 rect(xposblock1,yposblock1,30,20);
 rect(xposblock2,yposblock2,30,20);


  fill(lightOrange);
  rect(xposhalfblock1, yposhalfblock1,15,20);
  triangle(xpoint1downfromlefttri1,ypoint1downfromlefttri1,xpoint2downfromlefttri1,ypoint2downfromlefttri1,xpoint3downfromlefttri1,ypoint3downfromlefttri1);
  
  // rect(rectX,rectY,rectW,rectH);
  // fill(lightOrange);
  // arc(posx,posy,size2,size2,start,stop);
  // fill(White);
  // ellipse(posAX,posAY, sizeCircleA);
  // fill(darkOrange);
  // ellipse(posBX,posBY,sizeCircleB);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
