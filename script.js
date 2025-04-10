let canvasHeight = 0;
let canvasWidth = 0;


function setup() {
    canvasHeight = windowHeight;
    canvasWidth = windowWidth;
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background("gray");
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
    vertex(220, 90);
    vertex(240, 90);
    vertex(280, 125);
    vertex(260, 125);

    vertex(280,90);
    vertex(260, 90);
    vertex(220, 125);
    vertex(240, 125)

    endShape();


  }

