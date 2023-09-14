/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#90e0tf";
var systemBoxColor = "#00c800";

/* internal constants */

 const White = "#90e0tf";
const backgroundColor  = "#90e0tf";
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


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  push();

  if('draw_scale' in letterData) {
    scale(letterData['draw_scale']);
  }

  if ('draw_falling' in letterData){

    translate(0,letterData['draw_falling']);

  }
  // color/stroke setup
  stroke(strokeColor);
   strokeWeight(7);
  

  // determine parameters
  
  let posx = 0;
  let posy = 0;

  let ReverseLblock = letterData ["ReverseLblock"];
  let Tblock = letterData ["Tblock"];
  let Lblock = letterData ["Lblock"];
  let PosX4by1 = posx + letterData ["PosX4by1"];
  let PosX2by2 = posx + letterData ["PosX2by2"];
  let PosY2by2 = posy + letterData ["PosY2by2"];
  let PosX1by1 = posx +letterData ["PosX1by1"];
  let PosY1by1 = posy +letterData ["PosY1by1"];
  let block2by1 = letterData ["block2by1"];
  let PosX2by1 = posx + letterData ["PosX2by1"];
  let PosY2by1 = posy +letterData ["PosY2by1"];
  let Multiple1by1s = letterData ["Multiple1by1s"];
  let SfromLeftBlock = letterData ["SfromLeftBlock"];
  let SfromRightBlock = letterData ["SfromRightBlock"];
  let Triangle = letterData ["Triangle"];
  
// T block Code

  fill(TBlockFill);
if(Tblock == 1){

beginShape();
vertex(posx +66, posy+200);
vertex(posx + 100, posy+200);
vertex(posx+100,posy+100);
vertex(posx+66, posy+100);
vertex(posx+66, posy+133);
vertex(posx+33,posy+133);
vertex(posx+33,posy+166);
vertex(posx+66,posy+166);
vertex(posx+66,posy+200);
endShape();

}else if (Tblock == 2){
beginShape();
vertex(posx, posy+200);
vertex(posx, posy+166);
vertex(posx+33,posy+166);
vertex(posx+33, posy+133);
vertex(posx+66, posy+133);
vertex(posx+66,posy+166);
vertex(posx+100,posy+166);
vertex(posx+100,posy+200);
vertex(posx,posy+200);
endShape();
} else if (Tblock == 3){

  beginShape();
  vertex(posx, posy+200);
  vertex(posx, posy+100);
  vertex(posx+33,posy+100);
  vertex(posx+33, posy+133);
  vertex(posx+66, posy+133);
  vertex(posx+66,posy+166);
  vertex(posx+33,posy+166);
  vertex(posx+33,posy+200);
  vertex(posx,posy+200);
  endShape();

} else if (Tblock == 4){
  beginShape();
  vertex(posx+66, posy+233);
  vertex(posx+66, posy+133);
  vertex(posx+100,posy+133);
  vertex(posx+100, posy+166);
  vertex(posx+133, posy+166);
  vertex(posx+133,posy+200);
  vertex(posx+100,posy+200);
  vertex(posx+100,posy+233);
  vertex(posx+66,posy+233);
  endShape();

} else if (Tblock == 5){
  beginShape();
  vertex(posx, posy+133);
  vertex(posx, posy+100);
  vertex(posx+33,posy+100);
  vertex(posx+33, posy+66);
  vertex(posx+66, posy+66);
  vertex(posx+66,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+133);
  vertex(posx,posy+133);
  endShape();
}else if (Tblock == 6){
  beginShape();
  vertex(posx, posy+133);
  vertex(posx, posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100, posy+133);
  vertex(posx+66, posy+133);
  vertex(posx+66,posy+166);
  vertex(posx+33,posy+166);
  vertex(posx+33,posy+133);
  endShape(CLOSE);
}

// Reverse L Block Code

fill(ReverseLBlockFill);
if(ReverseLblock == 1){
  
 beginShape();
vertex(posx,posy+200);
vertex(posx,posy+100);
vertex(posx+66,posy+100);
vertex(posx+66,posy+133);
vertex(posx+33,posy+133);
vertex(posx+33,posy+200);
vertex(posx,posy+200);
endShape();
} else if (ReverseLblock == 2){

  beginShape();
  vertex(posx,posy+133);
  vertex(posx,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+133);
  vertex(posx,posy+133);
  endShape();
}else if (ReverseLblock == 3){

  beginShape();
  vertex(posx+33,posy+200);
  vertex(posx+33,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+200);
  vertex(posx+33,posy+200);
  endShape();

}else if (ReverseLblock == 4){
  beginShape();
  vertex(posx,posy+166);
  vertex(posx,posy+100);
  vertex(posx+33,posy+100);
  vertex(posx+33,posy+133);
  vertex(posx+100,posy+133);
  vertex(posx+100,posy+166);
  vertex(posx,posy+166);
  endShape();
}

// L Block Code 

fill(LBlockFill);

if(Lblock == 1){

  beginShape();
  vertex(posx+33,posy+133);
  vertex(posx+33,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+200);
  vertex(posx+66,posy+200);
  vertex(posx+66,posy+133);
  vertex(posx+33,posy+133);
  endShape();
} else if (Lblock == 2){
  beginShape();
  vertex(posx,posy+233);
  vertex(posx,posy+200);
  vertex(posx+66,posy+200);
  vertex(posx+66,posy+166);
  vertex(posx+100,posy+166);
  vertex(posx+100,posy+233);
  vertex(posx,posy+233);
  endShape();

} else if (Lblock == 3){
  beginShape();
  vertex(posx,posy+200);
  vertex(posx,posy+100);
  vertex(posx+33,posy+100);
  vertex(posx+33,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+200);
  vertex(posx,posy+200);
  endShape();
} else if (Lblock == 4){
  beginShape();
  vertex(posx,posy+133);
  vertex(posx,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+133);
  vertex(posx+33,posy+133);
  vertex(posx+33,posy+166);
  vertex(posx,posy+166);
  vertex(posx,posy+100);
  endShape();

} else if (Lblock == 5){
  beginShape();
  vertex(posx+33,posy+133);
  vertex(posx+33,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+200);
  vertex(posx+66,posy+200);
  vertex(posx+66,posy+133);
  vertex(posx+33,posy+133);
  endShape();

  beginShape();
  vertex(posx,posy+200);
  vertex(posx,posy+100);
  vertex(posx+33,posy+100);
  vertex(posx+33,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+200);
  vertex(posx,posy+200);
  endShape();
}

// if statements to keep all parameters in each letter but keeping some invisible.

if (PosY2by2 <=-200){
push();
noFill();
noStroke();
rect(PosX2by2, PosY2by2, 66,66);
pop();
} else{
fill(TwobyTwoBlockFill);
rect(PosX2by2, PosY2by2, 66,66);
}


if(PosX4by1 <=-2){
  push();
noFill();
noStroke();
rect(PosX4by1,posy+66,33,133);
pop();
}else{
fill(FourbyOneBlockFill);
rect(PosX4by1,posy+66,33,133);
}

if (PosY1by1 <=-200){

  push();
  noFill();
  noStroke();
  rect(PosX1by1, PosY1by1, 33);
  pop();
} else {
fill(OnebyOneBlockFill);
rect(PosX1by1, PosY1by1, 33);
}

// Code for if there's multiple 1 by 1 blocks

fill(OnebyOneBlockFill);
if(Multiple1by1s == 1){

rect(0,166,33);
rect(33,66,33);

} else if (Multiple1by1s == 2){

  rect(66,166,33);
  rect(66,66,33);

} else if (Multiple1by1s == 3){

  rect(0,100,33);
  rect(0,200,33);
} else if (Multiple1by1s == 4){

  rect(0,100,33);
  rect(0,166,33);
  rect(33,133,33);
  rect(66,100,33);
  rect(66,166,33);
} else if (Multiple1by1s == 5){
rect(66,100,33);
rect(33,166,33);

}

// 2 by 1 blocks code

fill(TwobyOneBlockFill);
  if(block2by1 == 1){
    rect(PosX2by1, PosY2by1,33,66);
  }else if (block2by1 == 2){
    rect(PosX2by1, PosY2by1,66,33);
  }

// S shaped block that starts from the top left hand corner

fill(SfromLeftBlockFill);

if(SfromLeftBlock ==1){

  beginShape();
  vertex(posx,posy+66);
  vertex(posx+33,posy+66);
  vertex(posx+33,posy+100);
  vertex(posx+66,posy+100);
  vertex(posx+66,posy+166);
  vertex(posx+33,posy+166);
  vertex(posx+33,posy+133);
  vertex(posx,posy+133);
  vertex(posx,posy+66);
  endShape();
} else if (SfromLeftBlock  == 2){
  beginShape();
  vertex(posx,posy+166);
  vertex(posx,posy+133);
  vertex(posx+33,posy+133);
  vertex(posx+33,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+133);
  vertex(posx+66,posy+133);
  vertex(posx+66,posy+166);
  endShape(CLOSE);



}
// S shaped block that starts from the top right corner
fill(SfromRightBlockFill);

if (SfromRightBlock == 1){
beginShape();
vertex(posx, posy+200);
vertex(posx, posy+133);
vertex(posx+33, posy+133);
vertex(posx+33, posy+100);
vertex(posx+66,posy+100);
vertex(posx+66, posy+166);
vertex(posx+33, posy+166);
vertex(posx+33, posy+200);
endShape(CLOSE);

} else if (SfromRightBlock == 2){
  beginShape();
  vertex(posx, posy+133);
  vertex(posx, posy+100);
  vertex(posx+66, posy+100);
  vertex(posx+66, posy+133);
  vertex(posx+100,posy+133);
  vertex(posx+100, posy+166);
  vertex(posx+33, posy+166);
  vertex(posx+33, posy+133);
  endShape(CLOSE);

 }

 // Triangles to make M and W recognisable

  fill(strokeColor);
  strokeWeight(2);
  if (Triangle == 1){

    triangle(33,100,49.5,133,66,100);

  } else if (Triangle == 2){

    triangle(33,200,49.5,166,66,200);

  }
 pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};


  if(percent >0){

    let draw_falling = map(percent, 0,100, -300,0);
    new_letter["draw_falling"] = draw_falling;
    percent = 100;
  } else if (percent < 0) {
    let draw_scale = map(percent, 0, 30, 1, 0);
      new_letter["draw_scale"] = draw_scale;
      percent = 0;
  
  
  }
  
  new_letter["posx"] = map(percent, 0, 100, oldObj["posx"], newObj["posx"]);
  new_letter["posy"] = map(percent, 0, 100, oldObj["posy"], newObj["posy"]);
  new_letter["ReverseLblock"] = map(percent, 0, 100, oldObj["ReverseLblock"], newObj["ReverseLblock"]);
  new_letter["Tblock"] = map(percent, 0, 100, oldObj["Tblock"], newObj["Tblock"]);
  new_letter["Lblock"] = map(percent, 0, 100, oldObj["Lblock"], newObj["Lblock"]);
  new_letter["PosX4by1"] = map(percent, 0, 100, oldObj["PosX4by1"], newObj["PosX4by1"]);
  new_letter["PosX2by2"] = map(percent, 0, 100, oldObj["PosX2by2"], newObj["PosX2by2"]);
  new_letter["PosY2by2"] = map(percent, 0, 100, oldObj["PosY2by2"], newObj["PosY2by2"]);
  new_letter["PosX1by1"] = map(percent, 0, 100, oldObj["PosX1by1"], newObj["PosX1by1"]);
  new_letter["PosY1by1"] = map(percent, 0, 100, oldObj["PosY1by1"], newObj["PosY1by1"]);
  new_letter["block2by1"] = map(percent, 0, 100, oldObj["block2by1"], newObj["block2by1"]);
  new_letter["PosX2by1"] = map(percent, 0, 100, oldObj["PosX2by1"], newObj["PosX2by1"]);
  new_letter["PosY2by1"] = map(percent, 0, 100, oldObj["PosY2by1"], newObj["PosY2by1"]);
  new_letter["Multiple1by1s"] = map(percent, 0, 100, oldObj["Multiple1by1s"], newObj["Multiple1by1s"]);
  new_letter["SfromLeftBlock"] = map(percent, 0, 100, oldObj["SfromLeftBlock"], newObj["SfromLeftBlock"]);
  new_letter["SfromRightBlock"] = map(percent, 0, 100, oldObj["SfromRightBlock"], newObj["SfromRightBlock"]);
  new_letter["Triangle"] = map(percent, 0, 100, oldObj["Triangle"], newObj["Triangle"]);
  
  return new_letter;
}

var swapWords = [
  ".TETRIS.",
  "FALLING", 
  ".WINNER.",
]
