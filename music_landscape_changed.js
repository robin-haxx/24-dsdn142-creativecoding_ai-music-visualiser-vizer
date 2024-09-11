// colours used
let orangeCol = [255,236,180];
let sunCol =    [244,191,139, 150]; // the sun has a transparency value of 150 as well
let whiteCol =  [255, 255, 235];
let blackCol =  [30,20,0];

let arcStart = 180; // changes how many degrees (0 to 360) the arcs are rotated


function draw_one_frame(words, vocal, drum, bass, other,counter) {
    
    // this is how to make a seconds counter
    let secondsCounter = floor(counter / 60); // divides counter by 60 (normally 60 ticks per second) and rounds it down to not be a decimal number
  
    // now you can use it to do things at certain times, like change background colour
    if (secondsCounter < 8){
    background(blackCol);
    } else {
    background(orangeCol); // cream
    }


    // variables to map the "other" track to sun ring width and calculate total ring count
    let ringWidth = map(other, 40, 100, 40, 80, true);
    let numStripes = height / ringWidth;
    // draws rings on top of each other at decreasing size
    for(let i=0; i<numStripes; i=i+2) {
    let cury = map(i, 0, numStripes-1, 0, height);
        noFill();
        stroke (whiteCol)
        strokeWeight (1)
        circle(width/2, height/2 , cury * 0.8);
    }


    // Volume Arcs
    // these variables map the 0 to 100 volume ranges to 0 to 360, so they can be used to draw an arc up to 360 degrees
    // they also add arcStart, which changes the rotation the arcs start at
    let vocalRing = map(vocal,  0, 100, arcStart, 360 +arcStart, true);
    let bassRing =  map(bass,   0, 100, arcStart, 360 +arcStart, true);
    let drumRing =  map(drum,   0, 100, arcStart, 360 +arcStart, true);
    let otherRing = map(other,  0, 100, arcStart, 360 +arcStart, true);

    // this draws the arcs using the "Ring" mapped variables
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


    // "Sun" (small oval)

    // maps vocal track to Y (vertical) placement of the small oval
    // the placement only changes when vocal is over 45
    let ovalPlace = map(vocal, 45, 100, height-100, 50, true);
    // maps vocal track to size of the small oval
    let ovalSize = map(vocal, 00, 100, 60, 150, true);

    // draws oval based on this
    fill(sunCol); // darker orange
    stroke(blackCol);
    ellipse(width/2, ovalPlace, ovalSize);

    

    // This draws the "toolbox", showing current music data being visualized.
    fill (0,100);
    rect (50,canvasHeight-350,250,325)
    fill (255)
    textSize (24);
    text ('counter: ' + counter, 100, canvasHeight-300)
    text ('seconds: ' + secondsCounter, 100, canvasHeight-250)
    text ('vocal: ' + round(vocal), 100, canvasHeight-200);
    text ('bass: ' + round(bass), 100, canvasHeight-150);
    text ('drum: ' + round(drum), 100, canvasHeight-100);
    text ('other: ' + round(other), 100, canvasHeight-50);
}



