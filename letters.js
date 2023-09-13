const alphabet = {
  "default": {
   "PosX1by1":33,
   "PosY1by1":133,
  },
  "A": {
    "ReverseLblock": 1,
    "Tblock": 1, 
  },
  "B": {
    "PosX4by1": 0,
    "PosX2by2": 33,
    "PosY2by2": 133,
    
  },
  "C": {
    "ReverseLblock": 1,
    "PosX1by1": 67,
    "PosY1by1": 100,
    "block2by1": 2,
    "PosX2by1": 33,
    "PosY2by1": 167,
  },
  "D": {
   "PosX4by1":66,
   "PosX2by2":0,
   "PosY2by2":133,
  },
  "E": {
  "Tblock": 2,
  "Lblock":4,
  },
  "F": {
    "PosX4by1":0,
    "block2by1": 2,
    "PosX2by1": 33,
    "PosY2by1": 66,
    "PosX1by1": 33,
    "PosY1by1": 133,
  },
  "G": {
    "PosX2by2": 0,
    "PosY2by2": 100,
    "block2by1": 1,
    "PosX2by1": 66,
    "PosY2by1": 100,
    "Lblock":2,
  },
  "H": {
    "Tblock": 3,
    "block2by1": 1,
    "PosX2by1": 66,
    "PosY2by1": 133,
    "PosX1by1": 0,
    "PosY1by1": 66,

  },
  "I": {
    "block2by1": 1,
    "PosX2by1": 33,
    "PosY2by1": 133,
    "PosX1by1": 33,
    "PosY1by1": 66,
  },
  "J": {
    "Multiple1by1s": 1,
    "block2by1": 1,
    "PosX2by1": 33,
    "PosY2by1": 133,
  },
  "K": {
    "SfromLeftBlock": 1,
    "block2by1": 1,
    "PosX2by1": 0,
    "PosY2by1": 133,
    "Multiple1by1s": 2,
  },
  "L": {
    "PosX4by1":33,
  },
  "M": {
    "Tblock": 3,
    "Lblock":1,
    "Triangle": 1,
  },
  "N": {
  "ReverseLblock":1,
  "block2by1": 1,
  "PosX2by1": 66,
  "PosY2by1": 133,
  "PosX1by1": 66,
  "PosY1by1": 100,
  },

  "O": {
    "Lblock": 5,
  },
  "P": {
   "SfromRightBlock": 1,
   "Multiple1by1s": 3,
   "block2by1": 1,
  "PosX2by1": 66,
  "PosY2by1": 100,
  },
  "Q": {
    "Tblock":4,
    "Lblock":4,
    "PosX1by1": 33,
  "PosY1by1": 133,

  },
  "R": {
    "Lblock":4,
    "PosX1by1": 0,
  "PosY1by1": 166,
  },
  "S": {
    "SfromLeftBlock": 2,
    "block2by1": 2,
    "PosX2by1": 0,
    "PosY2by1": 166,
  },
  "T": {
    "Tblock": 5,
    "block2by1": 1,
    "PosX2by1": 33,
    "PosY2by1": 133,
  },
  "U": {
    "ReverseLblock": 3,
    "block2by1": 1,
    "PosX2by1": 0,
    "PosY2by1": 133,
    "PosX1by1": 0,
    "PosY1by1": 100,
  },
  "V": {
    "Lblock":3,
    "block2by1": 1,
    "PosX2by1": 66,
    "PosY2by1": 100,
  },
  "W": {
    "Tblock":3,
    "ReverseLblock":3,
    "Triangle": 2,
  },
  "X": {
    "Multiple1by1s":4,
  },
  "Y": {
    "Lblock":2,
    "ReverseLblock":4,
    "PosX1by1": 66,
    "PosY1by1": 100,
  },
  "Z": {
    "SfromRightBlock": 2,
    "block2by1": 2,
    "PosX2by1": 33,
    "PosY2by1": 166,
  },
  "0": {
  "ReverseLblock":1,
  "Multiple1by1s": 5,
  "block2by1": 1,
    "PosX2by1": 66,
    "PosY2by1": 133,
  },
  "1": {
    "Tblock": 2,
    "block2by1": 2,
    "PosX2by1": 0,
    "PosY2by1": 100,
  },
  "2": {
    "Tblock": 2,
    "ReverseLblock": 2,
  },
  "3": {
    "Lblock": 5,
    "PosX1by1": 33,
    "PosY1by1": 133,
  },
  "4": {
    "Tblock": 1,
    "block2by1": 1,
    "PosX2by1": 0,
    "PosY2by1": 100,
  },
  "5": {
    "Lblock": 4,
    "PosX2by2": 33,
    "PosY2by2": 133,
  },
  "6": {
    "PosX2by2": 33,
    "PosY2by2": 133,
    "block2by1": 1,
    "PosX2by1": 0,
    "PosY2by1": 100,
    "PosX1by1": 0,
    "PosY1by1": 166,
  },
  
  "7": {
  "Tblock": 6,
  "PosX1by1": 0,
  "PosY1by1": 166,
  },
  "8": {
    "Tblock": 3,
    "Lblock": 1, 
    "PosX1by1": 33,
  "PosY1by1": 166, 
  },
  "9": {
    "PosX2by2": 0,
    "PosY2by2": 100,
    "block2by1": 1,
    "PosX2by1": 66,
    "PosY2by1": 100,
    "PosX1by1": 66,
    "PosY1by1": 166, 
  }

}