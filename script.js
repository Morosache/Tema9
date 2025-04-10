let canvasHeight = 0;
let canvasWidth = 0;


function setup() {
    canvasHeight = windowHeight;
    canvasWidth = windowWidth;
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background("gray");
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


