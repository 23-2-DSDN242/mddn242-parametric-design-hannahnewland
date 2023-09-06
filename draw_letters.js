/* these are optional special variables which will change the system */
var systemBackgroundColor = "#F2C9E1";
var systemLineColor = "#03045e";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

const darkOrange  = "#E94D29";
const lightOrange  = "#F0A10B";
const White = "#90e0tf";

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
  // strokeWeight(4);
  noStroke();

  // determine parameters for second circle
  
  let posx = 0  + letterData["xposblock1"];
  let posy = 180 + letterData["yposblock1"];

  let xposblock1 = posx + letterData["xposblock1"];
  let yposblock1 = posy + letterData["yposblock1"];

  // draw two circles
  fill(darkOrange);
  // ellipse(pos2x, pos2y, 100, 100);
  
  // rect(rectX,rectY,rectW,rectH);
  // fill(lightOrange);
  // arc(pos2x,pos2y,size2,size2,start,stop);
  // fill(White);
  // ellipse(posAX,posAY, sizeCircleA);
  // fill(darkOrange);
  // ellipse(posBX,posBY,sizeCircleB);

  rect(xposblock1,yposblock1,30,20);
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
