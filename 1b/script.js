function line(canvas, x1, x2, y) {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x1, y);
  ctx.lineTo(x2, y);
  ctx.stroke();
}

function polygon(canvas,x,y,size,side,color) {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (var i = 1; i <= side; i += 1) {
    ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / side), y + size * Math.sin(i * 2 * Math.PI / side));
  }
  
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  
  ctx.stroke();
  ctx.fill();
}