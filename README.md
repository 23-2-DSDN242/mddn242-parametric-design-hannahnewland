[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11529893&assignment_repo_type=AssignmentRepo)
## MDDN 242 2023 Assignment 2

"The Tetris Effect" by Hannah Newland.

I began this assignment with a sketch that I hated. I changed it, intending to make an alphabet that consisted of lego bricks stacked together, but it quickly became apparent that this would require too many parameters annd be far more difficult than I expected. I then changed to tetris, mainly because I have been playing too much tetris recently. After an exceptional amount of trial and error, I got started on my actual letters and their parameters (leaving quite a lot of practice parameters in the sketch to go back to later). I made the original shapes for the letters in a maths book, using the squares and multicoloured pens to finalise the specific shapes I wanted in each letter. I ended up with 17 parameters.

PosX: sets the X position at 0.
PosY: sets the Y position at 0.
ReverseLblock: Indicates whether the Reverse L shaped block will be present in that letter, and what rotation it will have.
Tblock: Indicates whether the T shaped block will be present in that letter, and what rotation it will have.
Lblock: Indicates whether the L shaped block will be present in that letter, and what rotation it will have.
PosX4by1: Indiciates the X position of the 4 by 1 block.
PosX2by2: Indicates the X position of the 2 by 2 block.
PosY2by2: Indicates the Y position of the 2 by 2 block.
PosX1by1: Indicates the X position of the 1 by 1 block.
PosY1by1: Indicates the Y position of the 1 by 1 block.
block2by1: Indicates whether the 2 by 1 block will be present in that letter, and what rotation it will have.
PosX2by1: Indicates the X position of the 2 by 1 block.
PosY2by1: Indicates the Y position of the 2 by 1 block.
Multiple1by1s: Indicates whether or not that letter will have multiple 1 by 1 blocks, and where each of them will be.
SfromLeftBlock: Indicates whether the S shaped block that begins from the top left corner will be present in that letter, and what rotation it will have.
SfromRightBlock: Indicates whether the S shaped block that begins from the top right corner will be present in that letter, and what rotation it will have.
Triangle: Indicates whether a triangle that helps the letter become more recognisable will be present.

A huge part of my code are if statements. I tried several ways to create the shapes, but if statements were the only way I could find that kept my number of parameters below 20. They basically take the number from next to the parameter and draw the shape in a particular rotation. 

Once I finished my letters I began the interpolate function, which took a long time to get right with a lot of help. I had a lot of issues with the parameters in the letters.js file. Once I finalised that, I added a scale and a translate function to the interpolate section, to get the shapes to move in the way I wanted.

I named it "The Tetris Effect" after the effect that occurs after you play too much tetris and start seeing the shapes and the patterns in your thoughts, mental images, and dreams.
