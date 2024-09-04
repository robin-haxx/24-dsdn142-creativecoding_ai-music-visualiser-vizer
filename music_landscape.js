let voiceThreshold = false;

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  
  fill(244,161,39,50); // orange
  //noFill();
  //stroke(0)

  if (vocal >= 45){
    voiceThreshold = true
} else {
    voiceThreshold = false
}

     let seconds = Math.floor(counter / 60);

     if (seconds < 10) {
        background(0,0,0);
    } else if (seconds < 20){
        background(255,236,180);
    } else {
        background (255,255,255)
    }

 let stripeWidth = map(other, 40, 100, 40, 80, true);

  let numStripes = height / stripeWidth;
  for(let i=0; i<numStripes; i=i+2) {
    // let i=0; i<numStripes; i=i+2
    // let i = numStripes - 1; i >= 0; i = i - 2
    let cury = map(i, 0, numStripes-1, 0, height);
    //rect(0, cury, width, stripeWidth);
    circle(canvasWidth/2, canvasHeight/2, cury* 0.8)
  }

  let ovalPlace = map(vocal, 45, 100, height-50, 50, true);
  let ovalSize = map(vocal, 20, 100, 60, 150, true);

  if (voiceThreshold){
    fill(229,119,30); // darker orange
    ellipse(width/2, ovalPlace, ovalSize);
  }


  


  fill (255)
  stroke(0)
  strokeWeight(4)
  textFont('Cascadia Code');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(40);
  text (seconds, 200, 200)
  text (voiceThreshold, 200, 300)
  noStroke()

}