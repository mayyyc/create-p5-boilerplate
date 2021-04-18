function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  for (x = 0; x <= mouseX; x += 30) {
    for (y = 0; y <= mouseY; y += 30) {
      ellipse(x, y, 20, 20);
    }
    ellipse(x, y, 20, 20);
  }
}
