let heartSize = 100;
 let pulsing = false 
 let big = false 
 let lastTime = 0;

 let c1, c2;
function setup() {
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  // Define colors
  c1 = color(203, 136, 207);
  c2 = color(188, 169, 232);
  setGradient(c1, c2);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
background(235, 199, 237);

// Change the heart size every 0.5 seconds
if (pulsing && millis() - lastTime >= 500) {
  big = !big;
  lastTime = millis();
}

if (big) {
  heartSize = 330;
} else {
  heartSize = 200;
}

drawHeart(250, 250, heartSize);
}

function drawHeart(x, y, size) {
  fill (250, 0, 0);
  stroke("black");
  strokeWeight(4);

  beginShape();
  vertex(x, y + size * 0.35);

  bezierVertex(
    x - size * 0.7, y - size * 0.1, 
    x - size * 0.45, y - size * 0.65, 
    x, y - size * 0.25
  );

  bezierVertex(
    x + size * 0.45, y - size * 0.65, 
    x + size * 0.7, y - size * 0.1, 
    x, y + size * 0.35
    );

    endShape(CLOSE);
  }

  function mousePressed() {
    //check if the mouse clicked on the heart
    let distance = dist(mouseX, mouseY, 250, 250);

    if (distance < 60) {
      pulsing = !pulsing;
    lastTime = millis();
    }

    
  }

