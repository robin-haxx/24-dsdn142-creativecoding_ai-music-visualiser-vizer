 // vocal, drum, bass, and other are volumes ranging from 0 to 100
 function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  ellipseMode(CENTER) //just to check ellipse are centered
  textSize(23);
  
  let seconds = Math.floor(counter / 60); // divides the counter by the amount of times it ticks per second

  textSize(30);
// text(seconds + " seconds", canvasWidth * 0.1, canvasHeight * 0.1);

if (seconds < 8) { // SCENE 1
  let rectanglesize = map (other, 0, 20, 40, 90)
  rect (200, 650, rectanglesize, rectanglesize)
  rect (400, 650, rectanglesize, rectanglesize)
  rect (600, 650, rectanglesize, rectanglesize)
  rect (800, 650, rectanglesize, rectanglesize)
  rect (1000,650, rectanglesize, rectanglesize)
  fill (255, 255, 255) // white colour fill

}  else if (seconds < 16) { // SCENE 2
  let circlesize = map (other, 0, 20, 4, 50)
  ellipse (200, 600, circlesize, circlesize)
  ellipse (400, 600, circlesize, circlesize)
  ellipse (600, 600, circlesize, circlesize)
  ellipse (800, 600, circlesize, circlesize)
  ellipse (1000,600, circlesize, circlesize)
  fill (122) // grey circles colour fill

}  else if (seconds < 28) { // Flower SCENE 3
let circlesize = map (vocal, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize) //middle circle (clock sits inside this one)

fill(99, 17, 207) //purple petal colour fill

line(390, 240, 390, 180) //frist clock hand
line (490, 240, 390, 240) //second clock hand 


}  else if (seconds < 35) { // SCENE 4
let circlesize = map (drum, 0, 120, 40, 390)
ellipse (220, 190, circlesize, circlesize)
ellipse (335, 90, circlesize, circlesize)
ellipse (420, 390, circlesize, circlesize)
ellipse (270, 350, circlesize, circlesize)
ellipse (540, 300, circlesize, circlesize)
ellipse (510, 125, circlesize, circlesize)
ellipse (390, 240, circlesize, circlesize)

fill (255, 255, 255) //white 

}  else if (seconds < 45) { // SCENE 5
let circlesize = map (bass, 0, 20, 4, 50)
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)

} else if (seconds < 50) {// SCENE 6
let circlesize = map (other, 0, 25, 4, 20)
//top row of circles
ellipse (200, 100, circlesize, circlesize) 
ellipse (400, 100, circlesize, circlesize) 
ellipse (600, 100, circlesize, circlesize) 
ellipse (800, 100, circlesize, circlesize) 
ellipse (1000, 100, circlesize, circlesize)
ellipse (1200, 100, circlesize, circlesize)

//second row of circles
ellipse (100, 200, circlesize, circlesize) 
ellipse (300, 200, circlesize, circlesize) 
ellipse (500, 200, circlesize, circlesize) 
ellipse (700, 200, circlesize, circlesize) 
ellipse (900, 200, circlesize, circlesize) 
ellipse (1100, 200, circlesize, circlesize) 
ellipse (1300, 200, circlesize, circlesize)

//third row of circles
ellipse (100, 450, circlesize, circlesize)
ellipse (300, 450, circlesize, circlesize)
ellipse (500, 450, circlesize, circlesize)
ellipse (700, 450, circlesize, circlesize)
ellipse (900, 450, circlesize, circlesize)
ellipse (1100, 450, circlesize, circlesize)
ellipse (1300, 450, circlesize, circlesize)
ellipse (1500, 450, circlesize, circlesize)

//fourth row of circles
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)

//fifth row of circles
ellipse (100, 990, circlesize, circlesize)
ellipse (300, 990, circlesize, circlesize)
ellipse (500, 990, circlesize, circlesize)
ellipse (700, 990, circlesize, circlesize)
ellipse (900, 990, circlesize, circlesize)
ellipse (1100, 990, circlesize, circlesize)

//sixth row of circles
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (1200,350, circlesize, circlesize)
ellipse (1400,350, circlesize, circlesize)
ellipse (1800,350, circlesize, circlesize)

//seventh row of circles
ellipse (200, 600, circlesize, circlesize)
ellipse (400, 600, circlesize, circlesize)
ellipse (600, 600, circlesize, circlesize)
ellipse (800, 600, circlesize, circlesize)
ellipse (1000,600, circlesize, circlesize)
ellipse (1200,600, circlesize, circlesize)

//eighth row of circles 
ellipse (200, 850, circlesize, circlesize)
ellipse (400, 850, circlesize, circlesize)
ellipse (600, 850, circlesize, circlesize)
ellipse (800, 850, circlesize, circlesize)
ellipse (1000,850, circlesize, circlesize)
ellipse (1200, 850, circlesize, circlesize)
ellipse (1400, 850, circlesize, circlesize)

} else if (seconds < 57) {// SCENE 7
let circlesize = map (other, 0, 20, 4, 50)
//top row of circles
ellipse (200, 100, circlesize, circlesize) 
ellipse (400, 100, circlesize, circlesize) 
ellipse (600, 100, circlesize, circlesize) 
ellipse (800, 100, circlesize, circlesize) 
ellipse (1000, 100, circlesize, circlesize)
ellipse (1200, 100, circlesize, circlesize)

//second row of circles
ellipse (100, 200, circlesize, circlesize) 
ellipse (300, 200, circlesize, circlesize) 
ellipse (500, 200, circlesize, circlesize) 
ellipse (700, 200, circlesize, circlesize) 
ellipse (900, 200, circlesize, circlesize) 
ellipse (1100, 200, circlesize, circlesize) 
ellipse (1300, 200, circlesize, circlesize)

//third row of circles
ellipse (100, 450, circlesize, circlesize)
ellipse (300, 450, circlesize, circlesize)
ellipse (500, 450, circlesize, circlesize)
ellipse (700, 450, circlesize, circlesize)
ellipse (900, 450, circlesize, circlesize)
ellipse (1100, 450, circlesize, circlesize)
ellipse (1300, 450, circlesize, circlesize)
ellipse (1500, 450, circlesize, circlesize)

//fourth row of circles
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)
  
//fifth row of circles
ellipse (100, 990, circlesize, circlesize)
ellipse (300, 990, circlesize, circlesize)
ellipse (500, 990, circlesize, circlesize)
ellipse (700, 990, circlesize, circlesize)
ellipse (900, 990, circlesize, circlesize)
ellipse (1100, 990, circlesize, circlesize)
  
//sixth row of circles
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (1200,350, circlesize, circlesize)
ellipse (1400,350, circlesize, circlesize)
ellipse (1800,350, circlesize, circlesize)
  
//seventh row of circles
ellipse (200, 600, circlesize, circlesize)
ellipse (400, 600, circlesize, circlesize)
ellipse (600, 600, circlesize, circlesize)
ellipse (800, 600, circlesize, circlesize)
ellipse (1000,600, circlesize, circlesize)
ellipse (1200,600, circlesize, circlesize)
  
//eighth row of circles 
ellipse (200, 850, circlesize, circlesize)
ellipse (400, 850, circlesize, circlesize)
ellipse (600, 850, circlesize, circlesize)
ellipse (800, 850, circlesize, circlesize)
ellipse (1000,850, circlesize, circlesize)
ellipse (1200, 850, circlesize, circlesize)
ellipse (1400, 850, circlesize, circlesize)

}  else if (seconds < 60) {// SCENE 8
let circlesize = map (other, 0, 20, 4, 50) 
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)

} else if (seconds < 70) {// SCENE 9
let circlesize = map (other, 0, 25, 4, 20)
//top row of circles
ellipse (200, 100, circlesize, circlesize) 
ellipse (400, 100, circlesize, circlesize) 
ellipse (600, 100, circlesize, circlesize) 
ellipse (800, 100, circlesize, circlesize) 
ellipse (1000, 100, circlesize, circlesize)
ellipse (1200, 100, circlesize, circlesize)

//second row of circles
ellipse (100, 200, circlesize, circlesize) 
ellipse (300, 200, circlesize, circlesize) 
ellipse (500, 200, circlesize, circlesize) 
ellipse (700, 200, circlesize, circlesize) 
ellipse (900, 200, circlesize, circlesize) 
ellipse (1100, 200, circlesize, circlesize) 
ellipse (1300, 200, circlesize, circlesize)

//third row of circles
ellipse (100, 450, circlesize, circlesize)
ellipse (300, 450, circlesize, circlesize)
ellipse (500, 450, circlesize, circlesize)
ellipse (700, 450, circlesize, circlesize)
ellipse (900, 450, circlesize, circlesize)
ellipse (1100, 450, circlesize, circlesize)
ellipse (1300, 450, circlesize, circlesize)
ellipse (1500, 450, circlesize, circlesize)

//fourth row of circles
ellipse (100, 750, circlesize, circlesize)
ellipse (300, 750, circlesize, circlesize)
ellipse (500, 750, circlesize, circlesize)
ellipse (700, 750, circlesize, circlesize)
ellipse (900, 750, circlesize, circlesize)
ellipse (1100, 750, circlesize, circlesize)

//fifth row of circles
ellipse (100, 990, circlesize, circlesize)
ellipse (300, 990, circlesize, circlesize)
ellipse (500, 990, circlesize, circlesize)
ellipse (700, 990, circlesize, circlesize)
ellipse (900, 990, circlesize, circlesize)
ellipse (1100, 990, circlesize, circlesize)

//sixth row of circles
ellipse (200, 350, circlesize, circlesize)
ellipse (400, 350, circlesize, circlesize)
ellipse (600, 350, circlesize, circlesize)
ellipse (800, 350, circlesize, circlesize)
ellipse (1000,350, circlesize, circlesize)
ellipse (1200,350, circlesize, circlesize)
ellipse (1400,350, circlesize, circlesize)
ellipse (1800,350, circlesize, circlesize)

//seventh row of circles
ellipse (200, 600, circlesize, circlesize)
ellipse (400, 600, circlesize, circlesize)
ellipse (600, 600, circlesize, circlesize)
ellipse (800, 600, circlesize, circlesize)
ellipse (1000,600, circlesize, circlesize)
ellipse (1200,600, circlesize, circlesize)

//eighth row of circles 
ellipse (200, 850, circlesize, circlesize)
ellipse (400, 850, circlesize, circlesize)
ellipse (600, 850, circlesize, circlesize)
ellipse (800, 850, circlesize, circlesize)
ellipse (1000,850, circlesize, circlesize)
ellipse (1200, 850, circlesize, circlesize)
ellipse (1400, 850, circlesize, circlesize)

}  else if (seconds < 79) { // SCENE 10
  ellipse (200, 200, 200, 200)
  ellipse (500, 200, 200, 200)
  
  let eyeSize = map (drum, 0, 100, 70, 220)
  ellipse (200, 200, eyeSize, eyeSize)
  ellipse (500, 200, eyeSize, eyeSize)
  
  let mouthSize = map (drum, 0, 100, 60, 350)
  rect (350, 500, 200, mouthSize)
  
}  else if (seconds < 100) { // SCENE 11
  let circlesize = map (other, 0, 20, 4, 50)
  ellipse (200, 350, circlesize, circlesize)
  ellipse (400, 350, circlesize, circlesize)
  ellipse (600, 350, circlesize, circlesize)
  ellipse (800, 350, circlesize, circlesize)
  ellipse (1000,350, circlesize, circlesize)

}  else if (seconds < 115) { // SCENE 12 (heart/'passion' lyric)
  background (97, 0, 6) //red 

let circlesize = map (vocal, 0, 40, 45, 90) 

  ellipse (400, 200, circlesize, circlesize) //top circle of heart left
  ellipse (800, 200, circlesize, circlesize) //top circle of heart right
  ellipse (600, 300, circlesize, circlesize) //middle circle/point of heart 
  ellipse (910, 360, circlesize, circlesize) //right middle edge point
  ellipse (310, 360, circlesize, circlesize) //left middle edge point
  ellipse (400, 550, circlesize, circlesize) //left middle medium
  ellipse (500, 700, circlesize, circlesize) //below left middle medium
  ellipse (800, 550, circlesize, circlesize) // right middle medium
  ellipse (700, 700, circlesize, circlesize) //below right middle medium
  ellipse (600, 850, circlesize, circlesize) //bottom of heart circle/point


} else if (seconds < 128) { // SCENE 12
 let circlesize = map (drum, 0, 120, 40, 390)
 ellipse (220, 190, circlesize, circlesize)
 ellipse (335, 90, circlesize, circlesize)
 ellipse (420, 390, circlesize, circlesize)
 ellipse (270, 350, circlesize, circlesize)
 ellipse (540, 300, circlesize, circlesize)
 ellipse (510, 125, circlesize, circlesize)
 ellipse (390, 240, circlesize, circlesize)

}  else if (seconds < 139) { // SCENE 13
    let rectanglesize = map (other, 0, 20, 40, 70)
    rect (200, 650, rectanglesize, rectanglesize)
    rect (400, 650, rectanglesize, rectanglesize)
    rect (600, 650, rectanglesize, rectanglesize)
    rect (800, 650, rectanglesize, rectanglesize)
    rect (1000,650, rectanglesize, rectanglesize)

} else if (seconds < 145) { // SCENE 14 - LAST SCENE
  let circlesize = map (other, 0, 20, 4, 35)
  ellipse (200, 350, circlesize, circlesize)
  ellipse (400, 350, circlesize, circlesize)
  ellipse (600, 350, circlesize, circlesize)
  ellipse (800, 350, circlesize, circlesize)
  ellipse (1000,350, circlesize, circlesize) //disappear when it says dissappear off screen - THE END :)

}} // finished 147sec - 2 minutes, 45 seconds