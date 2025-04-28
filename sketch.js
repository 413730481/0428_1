let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffe5d9'); // 設定背景顏色為 #ffe5d9
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  background('#ffe5d9'); // 每次繪製時重設背景顏色
  // 計算影像置中的位置
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  image(capture, x, y, capture.width, capture.height); // 顯示影像
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 更新影像大小
}
