// // CITYSCAPE ASGN START CODE

// // Set up Canvas and Graphics Context
// let cnv = document.getElementById("myCanvas");
// let ctx = cnv.getContext("2d");
// cnv.width = 300;
// cnv.height = 650;

// // BLUE BACKGROUND
// ctx.fillStyle = "blue";
// ctx.fillRect(0, 0, cnv.width, cnv.height);

// // DRAW LEFT BUILDING
// ctx.fillStyle = "black";
// // Building Base
// ctx.fillRect(0, 350, 150, 300);
// // Middle Section
// ctx.fillRect(20, 200, 110, 150);
// // Triangle Top
// ctx.beginPath();
// ctx.moveTo(20, 200);
// ctx.lineTo(130, 200);
// ctx.lineTo(130, 100);
// ctx.fill();

// // DRAW RIGHT BUILDING
// ctx.fillStyle = "black";
// // Building Base
// ctx.fillRect(150, 100, 150, 550);
// // Medium Top
// ctx.fillRect(170, 40, 110, 60);
// // Small Top
// ctx.fillRect(190, 20, 70, 20);

// //WINDOWS LEFT
// ctx.fillStyle = "white";
// ctx.fillRect(175, 120, 15, 500);
// ctx.fillRect(205, 120, 15, 500);
// ctx.fillRect(235, 120, 15, 500);
// ctx.fillRect(265, 120, 15, 500);
// ctx.fillRect(28, 380, 100, 20);
// ctx.fillRect(28, 415, 100, 20);
// ctx.fillRect(28, 450, 100, 20);
// ctx.fillRect(28, 485, 100, 20);
// ctx.fillRect(28, 520, 100, 20);
// ctx.fillRect(28, 555, 100, 20);
// ctx.fillRect(28, 590, 100, 20);
// ctx.fillRect(40, 210, 10, 10);
// ctx.fillRect(40, 230, 10, 10);
// ctx.fillRect(40, 250, 10, 10);
// ctx.fillRect(40, 270, 10, 10);
// ctx.fillRect(40, 290, 10, 10);
// ctx.fillRect(40, 310, 10, 10);
// ctx.fillRect(40, 330, 10, 10);
// ctx.fillRect(60, 210, 10, 10);
// ctx.fillRect(60, 230, 10, 10);
// ctx.fillRect(60, 250, 10, 10);
// ctx.fillRect(60, 270, 10, 10);
// ctx.fillRect(60, 290, 10, 10);
// ctx.fillRect(60, 310, 10, 10);
// ctx.fillRect(60, 330, 10, 10);
// ctx.fillRect(80, 210, 10, 10);
// ctx.fillRect(80, 230, 10, 10);
// ctx.fillRect(80, 250, 10, 10);
// ctx.fillRect(80, 270, 10, 10);
// ctx.fillRect(80, 290, 10, 10);
// ctx.fillRect(80, 310, 10, 10);
// ctx.fillRect(80, 330, 10, 10);
// ctx.fillRect(100, 210, 10, 10);
// ctx.fillRect(100, 230, 10, 10);
// ctx.fillRect(100, 250, 10, 10);
// ctx.fillRect(100, 270, 10, 10);
// ctx.fillRect(100, 290, 10, 10);
// ctx.fillRect(100, 310, 10, 10);
// ctx.fillRect(100, 330, 10, 10);

// landscape

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;
let y = 350;
let x = 149;
let w = 220;
let r = 50;
let g = 0;

requestAnimationFrame(draw);

function draw() {
  if (y < 500) {
    y--;
  }
  if (x > -900) {
    x--;
  }
  if (w > 0) {
    w++;
  }
  if (r < 190) {
    r += 0.15;
  }
  if (g > -1) {
    g++;
  }

  //SKY
  ctx.fillStyle = "cornflowerblue";
  ctx.fillRect(0, 0, 500, 500);
  //SUN
  ctx.fillStyle = `rgb(255, ${g}, 0)`;
  ctx.beginPath();
  ctx.arc(250, y, r, 0, 2 * Math.PI);
  ctx.fill();

  //frame
  requestAnimationFrame(draw);

  //GROUND
  ctx.fillStyle = "seagreen";
  ctx.fillRect(0, 350, 500, 150);

  //CLOUDS
  let cloudImg = document.getElementById("cloud");
  ctx.drawImage(cloudImg, x, 100);
  ctx.drawImage(cloudImg, w, 75);
}
