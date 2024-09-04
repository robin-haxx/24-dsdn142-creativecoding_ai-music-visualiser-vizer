// let blackCol = [0,0,0];
// let whiteCol = [255,255,255];
// let orangeCol = [229,119,30];
// let orangeAlpha = [244,161,39,50];
// let creamBG = [255,236,180];

// let voiceThreshold = false;
// let arcStart = 180;

// let scene;
// let heron = [];

function draw_one_frame(words, vocal, drum, bass, other,counter) {

 // // volume arcs
  // let vocalRing = map(vocal, 0, 100, arcStart, 360, true);
  // let bassRing = map(bass, 0, 100, arcStart, 360, true);
  // let drumRing = map(drum, 0, 100, arcStart, 360, true);
  // let otherRing = map(other, 0, 100, arcStart, 360, true);

  // stroke(whiteCol)
  // noFill();
  // arc(width/2, height/2, 400,400, arcStart, vocalRing)
  // arc(width/2, height/2,300,300,arcStart,bassRing);
  // arc(width/2, height/2,200,200,arcStart,drumRing);
  // arc(width/2, height/2,100,100,arcStart,otherRing);


  // if (firstRun){
  //   scene = loadImage ('assets/scene.png')
  //   for (let i = 0; i <= 8; i++){
  //   heron.push(loadImage( 'assets/heron/' + i + '.png'))
    
  //   }
  //   firstRun = false;
    
  // }

  // for (let i = 0; i <= 8; i++){
  //   heron[i].resize(250,250);
  // }
  // let seconds = Math.floor(counter / 60);
  // let secondsRemainder = (seconds % 2);
  // let counterProxy = Math.floor(counter / 8); 
  // let proxySlowed = Math.floor (counterProxy * 0.66);
  // let remainder = proxySlowed % 8;

  // //noFill();
  // //stroke(0)

  // if (vocal >= 45){
  //   voiceThreshold = true;
  // } else {
  //   voiceThreshold = false;
  // }

  //    if (seconds < 10) {
  //       background(blackCol);
  //   } else if (seconds < 20){
  //       background(creamBG);
  //   } else {
  //       background (whiteCol)
  //   }

  // let drumAlpha = map (drum, 40, 100, 300, 0, true);
  // tint (255, 255, drumAlpha)
  // image(scene, 0,0);
  // noTint();


  // fill(orangeAlpha); // orange

  // let stripeWidth = map(other, 40, 100, 40, 80, true);

  // let numStripes = height / stripeWidth;
  // for(let i=0; i<numStripes; i=i+2) {
  //   // let i=0; i<numStripes; i=i+2
  //   // let i = numStripes - 1; i >= 0; i = i - 2
  //   let cury = map(i, 0, numStripes-1, 0, height);
  //   //rect(0, cury, width, stripeWidth);
  //   circle(canvasWidth/2, canvasHeight/2, cury* 0.8)
  // }




  // let ovalPlace = map(vocal, 45, 100, height-50, 50, true);
  // let ovalSize = map(vocal, 20, 100, 60, 150, true);

  // if (voiceThreshold){
  
  // if (counterProxy % 4 < 3) {
  //     push();
  //       scale(-1,1)
  //        image (heron[7],canvasWidth*.7,canvasHeight*.25);
  //        pop();
  // }
  // fill(orangeCol); // darker orange
  // ellipse(width/2, ovalPlace, ovalSize);

  // }else {

  //   push();
  //   translate(width/2, height/2);
  //   image (heron[remainder],remainder*100,0);
  //   scale(-1,1);
  //   image (heron[remainder],remainder*100,0);
  //   pop();
  // }




  // fill (whiteCol);
  // stroke (blackCol);
  // strokeWeight(4);
  // textFont('Cascadia Code');
  // textAlign(LEFT);
  // textStyle(BOLD);
  // textSize(40);
  // // text ('seconds: '+seconds, 200, 200)
  // // text ('voice: '+voiceThreshold, 200, 300)
  // // text ('odd/even seconds: ' + secondsRemainder, 200, 600)
  // // text ('counterProxy: '+counterProxy, 200, 400)
  // // text ('remainder: '+remainder, 200, 500)
  // noStroke()
}