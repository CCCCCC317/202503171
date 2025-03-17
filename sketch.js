let angle = 0;
let seaweeds = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container');
  let seaweedCount = 40;

  for (let j = 0; j < seaweedCount; j++) {
    let x = (width / seaweedCount) * j + random(-10, 10);
    let seaweedHeight = random(100, 480); // 調整海草的高度範圍
    let seaweedWidth = random(30, 60);
    let seaweedColor = color(random(255), random(255), random(255), 150); // 設置顏色和透明度
    seaweeds.push({ x, seaweedHeight, seaweedWidth, seaweedColor });
  }
}

function draw() {
  clear(); // 設置透明背景

  for (let j = 0; j < seaweeds.length; j++) {
    let { x, seaweedHeight, seaweedWidth, seaweedColor } = seaweeds[j];
    let y = height;

    stroke(seaweedColor.levels[0], seaweedColor.levels[1], seaweedColor.levels[2], 50); // 設置線條顏色和透明度
    strokeWeight(seaweedWidth / 2); // 設定線條粗細
    noFill(); // 避免線條後面出現填充顏色

    // 繪製像水草一樣搖擺的線條
    beginShape();
    for (let i = 0; i <= seaweedHeight; i += 10) {
      let xOffset = noise(angle + j * 0.1 + i * 0.05) * seaweedWidth / 2 - seaweedWidth / 4; // 使用 Perlin 噪聲生成擺動效果
      vertex(x + xOffset, y - i);
    }
    endShape();
  }

  angle += 0.01; // 調整角度增量以控制擺動速度
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}