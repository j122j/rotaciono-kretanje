let angle = 0;
let center;
let pos;
let math;
let angleSlider;
let radiusSlider;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  center = createVector(250, 250);
  pos = createVector(0, 0);
  math = document.querySelector(".math");
  radiusSlider = createSlider(50, 250, 150, 1)
    .size(200)
    .parent(createDiv("Poluprečnik:"));
  angleSlider = createSlider(0.1, 5, 1, 0)
    .size(200)
    .parent(createDiv("Brzina"));
  angleSlider.size(200);
}

function draw() {
  background(0);
  let r = radiusSlider.value();

  color(255);
  ellipse(center.x, center.y, 20, 20);
  noFill();
  ellipse(center.x, center.y, r * 2, r * 2);
  fill(255);
  angle += angleSlider.value();
  angle %= 360;

  pos.x = center.x - r * cos(angle);
  pos.y = center.y - r * sin(angle);

  stroke("#ff0000");
  line(center.x, center.y, pos.x, center.y);
  stroke("#0000ff");
  line(pos.x, center.y, pos.x, pos.y);

  stroke(255);
  strokeWeight(3);
  line(center.x, center.y, pos.x, pos.y);
  ellipse(pos.x, pos.y, 10, 10);

  math.innerText = generateText(convertDeg(angle % 360), r);
}

function generateText(theta, r) {
  return `
  θ = ${Math.round(theta)}°
  r = ${r}
  x = sin θ × r = ${Math.round(sin(theta) * r)}
  y = cos θ × r = ${Math.round(cos(theta) * r)}
  `;
}

function convertDeg(deg) {
  if (deg <= 90 || (deg > 180 && deg < 270)) {
    return deg % 90;
  } else {
    return 90 - (deg % 90);
  }
}
