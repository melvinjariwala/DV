function square(canvas, x, y, length) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'Red';
  ctx.fillRect(x, y, length, length);
}
function line(canvas, x1, x2, y) {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}

function rectangle(canvas, x, y, width, height) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'Orange';
  ctx.fillRect(x, y, width, height);
}
function circle(canvas, x, y) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.fill();
}

function triangle(canvas, x1, x2, y1, y2) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y1);

  ctx.lineTo(x1 + ((x2 - x1) / 2), y2);
  ctx.closePath();
  ctx.fill();
}


function oval(canvas, x, y) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'blue';

  ctx.scale(2, 1);
  ctx.beginPath();
  ctx.arc(x, y, 90, 0, 2 * Math.PI);
  ctx.fill();
  ctx.restore();

}

function semicircle(canvas, x, y) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'violet';
  ctx.beginPath();
  ctx.arc(x, y, 70, 0, Math.PI);
  ctx.fill();
}