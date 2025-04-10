let canvasHeight = 0;
let canvasWidth = 0;

const colorfulBoxesCols1 = 2;
const colorfulBoxesCols2 = 3;
const colorfulBoxesRows1 = 3;
const colorfulBoxesRows2 = 2;
const colorfulBoxes = [];
const matrix1 = [];
const matrix2 = [];



function setup() {
    canvasHeight = windowHeight;
    canvasWidth = windowWidth;
    createCanvas(canvasWidth, canvasHeight);

    
    initBoxes(75,25, colorfulBoxesCols1, colorfulBoxesRows1, matrix1)
    initBoxes(350, 50, colorfulBoxesCols2, colorfulBoxesRows2, matrix2)

    colorfulBoxes.push(matrix1);
    colorfulBoxes.push(matrix2);

}

function draw() {
    background("gray");
    drawColorfulBoxes();
    drawEqual();
    drawX();
}


function initBoxes(width, height, cols, rows, matrix) {
    let x = width;
    let y = height;

    for(let i = 0; i < rows; i++) {
        const lines = [];

        for(let j = 0; j < cols; j++) {
            const box = {
                x: x,
                y: y, 
                s: 40,
                num: Math.floor(Math.random() * 10),
                color: {
                    r: Math.floor(Math.random() * 255),
                    g: Math.floor(Math.random() * 255),
                    b: Math.floor(Math.random() * 255),
                },
            };
            lines.push(box);
            x += 50;
        }
        matrix.push(lines);
        x = width;
        y += 50;
    }
}

function drawBox(obj) {
  fill(obj.color.r, obj.color.g, obj.color.b);
  square(obj.x, obj.y, obj.s);

  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(obj.num, obj.x + obj.s / 2, obj.y + obj.s / 2);
}


function drawColorfulBoxes() {
    for (let matrix of colorfulBoxes) { 
      for (let row of matrix) {       
        for (let box of row) {         
          drawBox(box);
        }
      }
    }
  }

function drawEqual() {
    fill("black");

    beginShape(QUADS);
    vertex(600, 110);
    vertex(600, 125);
    vertex(550, 125);
    vertex(550, 110);

    vertex(600, 80);
    vertex(600, 95);
    vertex(550, 95);
    vertex(550, 80);

    endShape();
  }

  
  function drawX() {

    fill("black");
    
    beginShape(QUADS);
    vertex(220, 80);
    vertex(240, 80);
    vertex(280, 115);
    vertex(260, 115);

    vertex(280,80);
    vertex(260, 80);
    vertex(220, 115);
    vertex(240, 115)

    endShape();


  }

