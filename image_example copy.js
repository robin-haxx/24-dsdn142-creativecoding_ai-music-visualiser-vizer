
let img;
let firstRun = true;
function draw_one_frame(words, vocal, drum, bass, other,counter) {
    
    let heightStretch = map (other, 0,100,0.2,0.75,true)
    
    if (firstRun){
        img = loadImage('scene.png') // replace 'assets/scene' with whatever your image is 
        firstRun = false;
    }
    background (200)

    push(); // saves the origin point (0,0) in top left
        translate(0,canvasHeight) // moves the origin point (0,0) to bottom left (by moving full height down in Y direction)
        
        image(img,0,0,canvasWidth,-canvasHeight* heightStretch); // draws image coming along and up from bottom left (negative Y is up)
    pop(); // goes back to drawing from top left

    textSize(50)
    text ('other: ' + round(other), 50, 100);
    text ('heightStretch: ' + round(heightStretch, 2), 50, 200);

}