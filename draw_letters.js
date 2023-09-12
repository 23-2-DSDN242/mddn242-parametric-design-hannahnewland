/* these are optional special variables which will change the system */
var systemBackgroundColor = "#F2C9E1";
var systemLineColor = "#03045e";
var systemBoxColor = "#00c800";

/* internal constants */
// const darkBlue  = "#0077b6";
// const lightBlue  = "#90e0ef";
// const strokeColor  = "#03045e";

 //const darkOrange  = "#E94D29";
// const lightOrange  = "#F0A10B";
// const White = "#90e0tf";
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

  let Lblock = letterData ["Lblock"];
  let Tblock = letterData ["Tblock"];
  let ReverseLblock = letterData ["ReverseLblock"];
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

}

fill(TwobyTwoBlockFill);
rect(PosX2by2, PosY2by2, 66,66);

fill(LBlockFill);

if(Lblock == 1){
  
 beginShape();
vertex(posx,posy+200);
vertex(posx,posy+100);
vertex(posx+66,posy+100);
vertex(posx+66,posy+133);
vertex(posx+33,posy+133);
vertex(posx+33,posy+200);
vertex(posx,posy+200);
endShape();
} else if (Lblock == 2){

  beginShape();
  vertex(posx,posy+133);
  vertex(posx,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+133);
  vertex(posx,posy+133);
  endShape();
}else if (Lblock == 3){

  beginShape();
  vertex(posx+33,posy+200);
  vertex(posx+33,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+200);
  vertex(posx+33,posy+200);
  endShape();

}else if (Lblock == 4){
  beginShape();
  vertex(posx,posy+200);
  vertex(posx,posy+133);
  vertex(posx+33,posy+133);
  vertex(posx+33,posy+166);
  vertex(posx+100,posy+166);
  vertex(posx+100,posy+200);
  vertex(posx,posy+200);
  endShape();


}

fill(ReverseLBlockFill);

if(ReverseLblock == 1){

  beginShape();
  vertex(posx+33,posy+133);
  vertex(posx+33,posy+100);
  vertex(posx+100,posy+100);
  vertex(posx+100,posy+200);
  vertex(posx+66,posy+200);
  vertex(posx+66,posy+133);
  vertex(posx+33,posy+133);
  endShape();
} else if (ReverseLblock == 2){
  beginShape();
  vertex(posx,posy+233);
  vertex(posx,posy+200);
  vertex(posx+66,posy+200);
  vertex(posx+66,posy+166);
  vertex(posx+100,posy+166);
  vertex(posx+100,posy+233);
  vertex(posx,posy+233);
  endShape();

} else if (ReverseLblock == 3){
  beginShape();
  vertex(posx,posy+200);
  vertex(posx,posy+100);
  vertex(posx+33,posy+100);
  vertex(posx+33,posy+166);
  vertex(posx+66,posy+166);
  vertex(posx+66,posy+200);
  vertex(posx,posy+200);
  endShape();
} else if (ReverseLblock == 4){
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

} else if (ReverseLblock == 5){
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
fill(FourbyOneBlockFill);
rect(PosX4by1,posy+66,33,133);

fill(OnebyOneBlockFill);
rect(PosX1by1, PosY1by1, 33);

if(Multiple1by1s == 1){

rect(0,166,33);
rect(33,66,33);

} else if (Multiple1by1s == 2){

  rect(66,166,33);
  rect(66,66,33);

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
}
  

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
