/* these are optional special variables which will change the system */
var systemBackgroundColor = "#90e0tf";
var systemLineColor = "#03045e";
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
  // color/stroke setup
  stroke(strokeColor);
   strokeWeight(4);
  

  // determine parameters for second circle
  
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

fill(TwobyOneBlockFill);
  if(block2by1 == 1){
    rect(PosX2by1, PosY2by1,33,66);
  }else if (block2by1 == 2){
    rect(PosX2by1, PosY2by1,66,33);
  }

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


  fill(strokeColor);
  strokeWeight(2);
  if (Triangle == 1){

    triangle(33,100,49.5,133,66,100);

  } else if (Triangle == 2){

    triangle(33,200,49.5,166,66,200);

  }

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if(percent < 50) {
    let draw_scale = map(percent, 0, 50, 1, 0);
    new_letter["draw_scale"] = draw_scale;
    percent = 0;
  }
  else {
    let draw_scale = map(percent, 50, 100, 0, 1);
    new_letter["draw_scale"] = draw_scale;
    percent = 100;
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
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
