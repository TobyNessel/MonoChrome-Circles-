## Before Starting This Task

Watch the following videos and skim their accompanying notes.

* Objects ([video](https://drive.google.com/file/d/118yBPDzH_fDfI0HnC8iYU5MG_ywgoHvF/view?usp=sharing)|[note](https://github.com/MissStrong/ICS2O_Semester_1_2021-2022/blob/main/Notes/Unit%202/Note%2007%20-%20Objects.md))
* Custom Objects ([video](https://drive.google.com/file/d/156lJp3pPZq7BLnAZ63L6Cvx55Vgck8UU/view?usp=sharing)|[note](https://github.com/MissStrong/ICS2O_Semester_1_2021-2022/blob/main/Notes/Unit%202/Note%2008%20-%20Custom%20Objects.md))

**Only begin this task if you have already finished Exercise 4.**

## Instructions

Go to **script.js** under **Files** and complete the body of `draw()` to replicate the sketch below. The colour of the circle does not have to go back to white (255) after it turns completely black (0) (the gif just does that because it's a looping gif).

![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Monochrome_Circles1.gif)

*Do not* modify anything in **index.html**. This HTML file needs to be there in order for the sketch to display properly.

When it works, click **Submit** in the top right corner. 

## Challenge

If you'd like a challenge, you can modify the program so that the circles go clockwise aronund the border.

![](https://raw.githubusercontent.com/MissStrong/ICS2O_Semester_1_2021-2022/main/Images/Monochrome_Circles2.gif)

## script.js

Here is the original code in **script.js** for reference:

```javascript
let circle = { // our circle object
  xPos: 25,
  yPos: 250,
	diameter: 50,
	colour: 255,
}

function setup() {
	createCanvas(500, 500);
  background(128);
	frameRate(10);
}

function draw() {
	ellipse(circle.xPos, circle.yPos, circle.diameter);
  // What else goes here?
}
```
