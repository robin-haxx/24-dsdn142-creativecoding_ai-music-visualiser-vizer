// NOTE that smoothing should be set to 100 in system_settings.js
// If you copy this code into your project, 
// by default the rotation animation will look "jittery."

function draw_one_frame(words, vocal, drum, bass, other,counter) {
    
// "counter" ticks 60x per second. secondsCounter divides counter by 60 and rounds down to a whole number.
let secondsCounter = floor(counter/60);
// map bass to a "multiplier" for the size of the circles - 1/2 size to 2x size
let sizeMod = map (bass, 0, 100, 0.5, 2.0, true);
// map drum value to degrees to draw something around a circle (0 to 360)
let drumDegrees = map (drum, 0 , 100, 0 , 360, true)
// map vocal track to colour value, 0 to 150 - used for background
let vocalBrightness = map(vocal, 20, 100, 0, 150, true);

// this function is INSIDE the draw loop since it uses sizeMod
function drawCircleRow(yChange = 0){
    for (let i= 0; i <= 4; i++){
    
            noFill();
            circle(100+ (i* (i/5) * 250),(canvasHeight/2) + yChange, (25 + (50*i))* sizeMod);
    } 
};

background(vocalBrightness); //uses mapped vocal volume data

push(); // saves transformation state
    translate(width/2, height/2); // moves origin to canvas center
    noStroke();
    fill (255, 50)      // 0 with 50/255 opacity (~20%)
    circle(0,0,1000);   // note these shapes are drawn at (0,0)
    fill (0, 50);       
    circle (0,0,300);
    
    for (let i = 0; i <= 360; i+= 45){ // this loops 8 times (360/45 = 8)
    push(); //again, saves transformation state
        
        rotate(drumDegrees + i + counter);
        stroke(255)
        drawCircleRow(-350);
        //circle(0,-300,100);
        // strokeWeight(10);
        // stroke (0)
        // line (0,0, 0, -1200)  

    pop(); // restores last transformation save
    }

pop(); // restores the one before that

// simpler drawCircleRow arrangement:

// for (let j = -300; j <= 300; j += 150){
//     drawCircleRow(j)
// }

//DEBUG TOOLBOX
fill (0,100);
rect (50,850,450,200)
fill (255)
textSize (24);
text ('counter: ' + counter, 100, 900)
text ('seconds: ' + secondsCounter, 100, 950)
text ('song: "Higher Ground"', 100, 1000);
text ('by ODESZA and Naomi Wild', 100, 1025);

}


