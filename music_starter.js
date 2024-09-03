
let scene;
let firstRun = true;

let rectY = 100;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // if (firstRun){
  //   scene = loadImage ('assets/scene.png');
  //   firstRun = false;
  // }

  background(20)
  //image(scene, 100,100);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
 

  let counterFrac = Math.floor (counter / 16);
  text (counterFrac, 100,100);

  if (counterFrac % 2 == 0){
    fill(255)
    stroke(255,255,100);
    
  } else {
    noFill();
    noStroke();

    rectY+=10;
    if (rectY > canvasHeight){
      rectY = 100;
    }

  }

  rect(100,rectY,100);

  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;
  

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
}



// let last_words = "";
// let last_words_opacity = 0;

function draw_one_frame(words, vocal, drum, bass, other,counter) {

  // store colours as variables and demonstrate array in 2D
  // add alpha to the orange colour
  background(255,236,180); // cream
  fill(244,161,39); // orange

// replace as ringWidth, refactor rect to draw circles of increasing size
  let stripeWidth = map(other, 40, 100, 40, 80, true);

  let numStripes = height / stripeWidth;
  for(let i=0; i<numStripes; i=i+2) {
    let cury = map(i, 0, numStripes-1, 0, height);
    rect(0, cury, width, stripeWidth);
  }

  // get rid of this
  let triangleHeight = map(bass, 40, 100, 200, 550, true);
  fill(117,200,174); // teal
  for(let i=0; i<3; i++) {
    let cur_x = map(i, 0, 4, 0, width);
    let next_x = map(i+1, 0, 3, 0, width);
    let mid_x = (cur_x + next_x) / 2.0;
    //let cur_y = 4 * height / 5;
    let cur_y = height 
    triangle(cur_x, cur_y, mid_x, cur_y - triangleHeight, next_x, cur_y);
  }

  // get rid of this
  let drumSize = map(drum, 30, 100, 30, 300, true);
  fill(90,61,43); // brown
  rect(0, 0, drumSize, drumSize);
  rect(width, 0, -drumSize, drumSize);
  rect(0, height, drumSize, -drumSize);
  rect(width, height, -drumSize, -drumSize);

  // explicit if statement for voiceThreshold
  let ovalPlace = map(vocal, 20, 100, height-50, 50, true);
  let ovalSize = map(vocal, 20, 100, 60, 150, true);
  fill(229,119,30); // darker orange
  ellipse(width/2, ovalPlace, ovalSize);

  // get rid of this all
  if(words == "") {
    last_words_opacity = last_words_opacity * 0.95;
    words = last_words;
  }
  else {
    last_words_opacity = (1 + last_words_opacity) * 1.1;
    if(last_words_opacity > 255) {
      last_words_opacity = 255;
    }
  }
  last_words = words;

  textFont('Georgia');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(80);
  noStroke();
  fill(0, 0, 0, int(last_words_opacity));
  text(words, width/2, height/2);
}