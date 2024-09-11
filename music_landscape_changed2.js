
let orangeCol = [244,161,39, 50];
let sunCol =    [244,191,139, 150];
let whiteCol =  [255, 255, 235];
let blackCol =  [30,20,0];

// let colourPalette = [orangeCol, sunCol, whiteCol, blackCol]
// let sunAlpha = colourPalette[1][3];

// let firstRun = true;
// let toggle = false;
// let voiceThreshold = false;
let arcStart = 180;

// let scene;
// let heron = [];

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  
   let secondsCounter = Math.floor(counter / 60);
  
  // // counterProxy ticks each 8/60 of a second 
  // let counterProxy = Math.floor(counter/8);
  // // decreasing the .66 number further will slow the animation more 
  // let proxySlowed = Math.floor(counterProxy*.66)
  // // remainder when this number is divided by 8
  // let remainder = proxySlowed % 8 

  // Initial step for loading images. Make sure you declare the variables first!
  // if (firstRun){
  //   scene = loadImage ('assets/scene.png');

  //   for (let i = 0; i <= 8; i++){
  //     heron.push(loadImage (`assets/heron/${i}.png`))
      
  //   }


  //   firstRun = false;
  // }
  // for (let i = 0; i < 9; i++){
  //   heron[i].resize(250,250);
  // }

  //   if(vocal > 45){
  //   voiceThreshold = true;
  // } else{
  //   voiceThreshold = false;
  // }

  // if (toggle){
  // background(whiteCol)
  // } else 

  // if (seconds < 10){
  // background(blackCol);
  // } else {
   background(255,236,180); // cream
  // }
  //  fill(orangeCol); // orange
  //  noStroke();

  //background "scene" image - requires the declared variable and first run function
  // let bassAlpha = map(drum, 40, 100, 300, 0, true);

  // tint(255,255,bassAlpha);
  // image(scene, 0,0);
  // noTint();

  // // variables to map the "other" track to sun ring width and calculate total ring count
  // let ringWidth = map(other, 40, 100, 40, 80, true);
  // let numStripes = height / ringWidth;
  // // draws rings on top of each other at decreasing size
  // for(let i=0; i<numStripes; i=i+2) {
  // let cury = map(i, 0, numStripes-1, 0, height);
  //   circle(width/2, height/2 , cury * 0.8);
  // }


  //   if (voiceThreshold == false){
  //   image (heron[remainder],canvasWidth/2,canvasHeight/2);

  // } else if (counterProxy % 4 < 3) {
  //   image (heron[7],canvasWidth*.7,canvasHeight*.25);
  // } else {
  //   image (heron[8],canvasWidth*.7,canvasHeight*.25);
  // }
  
  // "toggle" is a true/false value that inverts when a very specific condition is met -
  // drum value rounded down to nearest whole number detected as exactly 70
  // declared as false at the top of code.
  // if (Math.floor(drum) == 70){
  //   toggle = !toggle;
  // }

  // // maps vocal track to Y placement and size of the small oval
  // let ovalPlace = map(vocal, 45, 100, height-50, 50, true);
  // let ovalSize = map(vocal, 20, 100, 60, 150, true);
  // // draws oval based on this
  // fill(sunCol); // darker orange
  // ellipse(width/2, ovalPlace, ovalSize);

  // volume arcs

  let vocalRing = map(vocal, 0, 100, arcStart, 360+arcStart, true);
  let bassRing = map(bass, 0, 100, arcStart, 360+arcStart, true);
  let drumRing = map(drum, 0, 100, arcStart, 360+arcStart, true);
  let otherRing = map(other, 0, 100, arcStart, 360+arcStart, true);

  push();
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(4);
    noFill();
    arc(0,0,400,400,arcStart,vocalRing);
    arc(0,0,300,300,arcStart,bassRing);
    arc(0,0,200,200,arcStart,drumRing);
    arc(0,0,100,100,arcStart,otherRing);
  pop();

  // nested for loop example, draws 3 squares for each
  // for (let i = 0; i < 20; i++){
  //   for (let j = 0; j < 20; j++){
  //     fill (255,bass-50);
  //     rect(i*50,j*30-20,20);
  //     fill (255,bass);
  //     rect(i*50,j*30,20);
  //     fill (255,bass+50);
  //     rect(i*50,j*30+20,20);
  //   }
  // }

  // DEBUG TOOLS:
  // value for seconds counter, proxy, slowed proxy and drum == 70 toggle
  // fill(whiteCol);
  // stroke(blackCol)
  // strokeWeight(4)
  // textSize(40);
  // text(seconds + " seconds",            canvasWidth * 0.05, canvasHeight * 0.20)
  // text("counter / 8 = " + counterProxy, canvasWidth * 0.05, canvasHeight * 0.30)
  // text("slowed: " + proxySlowed,        canvasWidth * 0.05, canvasHeight * 0.35)
  // text("% 8 remainder: " + remainder,   canvasWidth * 0.05, canvasHeight * 0.40)
  // text("toggle: " + toggle,             canvasWidth * 0.05, canvasHeight * 0.45)

  fill (0,100);
rect (50,850,450,200)
fill (255)
textSize (24);
text ('counter: ' + counter, 100, 900)
text ('seconds: ' + secondsCounter, 100, 950)
text ('song: "Higher Ground"', 100, 1000);
text ('by ODESZA and Naomi Wild', 100, 1025);

}



