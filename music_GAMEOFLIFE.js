

let firstRun = true;
let phaseCheck = false;

let gridX = 20;
let gridY = 20;
let cellsX ;
let cellsY ;

let grid;
let cols;
let rows;
let resolution = 10;

let colGreen = [80,150,90]
let colBlue = [50,50,100]
let colRed = [80,50,20]
let colWhite = [255,255,255]

let aliveCol = [colGreen,colRed,colBlue,colWhite];
let deadCol = [255,255,230];
let current = 0;

function draw_one_frame(words, vocal, drum, bass, other,counter) {

  let resMap = map(other,0,100,80,10);


  if (counter % 540 == 0 && counter != 0){
    phaseCheck = true;
    resolution += 10;
    if (resolution >= 40){
      resolution = 10;
    }
    current++;
    if (current >= aliveCol.length){
    current = 0;
  }
  }

  if (firstRun || phaseCheck){
    cols = canvasWidth / resolution;
    rows = canvasHeight / resolution;
    grid = make2DArray(cols,rows)
    for (let i = 0; i < cols; i++){
      for (let j = 0; j < rows; j++){
        grid [i][j] = Math.floor(random(2));
      }
    }
    firstRun = false;
    phaseCheck = false;
  }
  let bassFade = map (bass, 0, 100, 100, 0, true)
  deadCol.push(bassFade)
  background(deadCol)
  deadCol.pop();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(aliveCol[current]);
        stroke(bass*5);
        strokeWeight(drum/20)
        rect(x, y, resolution - 1, resolution - 1);
      }
    }
  }

  let next = make2DArray(cols, rows);

  // Compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      let neighbours = countNeighbours(grid, i, j);

      if (state == 0 && neighbours == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbours < 2 || neighbours > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }

    }
  }
  // iterates the GOL based on a rate that is the product of audio activity
  if( (drum >= 40 && counter % 5 == 0) || 
      (vocal >= 45 && counter % 15 == 0) || 
      (bass >= 60 && counter % 20 == 0) || 
      (other >= 65 && counter % 25 == 0)) {
  grid = next;
  }
  }

  function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

function countNeighbours(grid,x,y){
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}


 