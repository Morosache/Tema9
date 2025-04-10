let canvasHeight = 0;
let canvasWidth = 0;
let multiMatrix = [];

const colorfulBoxesCols1 = 3;
const colorfulBoxesCols2 = 2;
const colorfulBoxesRows1 = 2;
const colorfulBoxesRows2 = 3;
const colorfulBoxes = [];
const matrix1 = [];
const matrix2 = [];



function setup() {
    canvasHeight = windowHeight;
    canvasWidth = windowWidth;
    createCanvas(canvasWidth, canvasHeight);

    
    initBoxes(25,50, colorfulBoxesCols1, colorfulBoxesRows1, matrix1)
    initBoxes(350, 25, colorfulBoxesCols2, colorfulBoxesRows2, matrix2)

    colorfulBoxes.push(matrix1);
    colorfulBoxes.push(matrix2);

    multiMatrix = calculateMultiplicationResult(matrix1, matrix2);

}

function draw() {
    background("gray");
    drawColorfulBoxes();
    drawEqual();
    drawX();
    drawMultiplicationMatrix();
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


  function calculateMultiplicationResult(matrix1, matrix2) {
    const result = [];
    for( let i = 0; i < 2; i++) {
        const row = [];
        for(let j = 0; j < 2; j++) {
           let prod = 0;
           for(let k = 0; k < 3; k++) {
            prod += matrix1[i][k].num * matrix2[k][j].num;
           }
           const box = {
               x: 675 + j * 50,
               y: 50 + i * 50,
               s: 40,
               num: prod,
               color: {
               r: Math.floor(Math.random() * 255),
               g: Math.floor(Math.random() * 255),
               b: Math.floor(Math.random() * 255),
               },
           };
            row.push(box);
        }
        result.push(row);
    }
    return result;
  }

  function drawMultiplicationMatrix() {
    for (let row of multiMatrix) {
      for (let box of row) {
        drawBox(box);
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

