window.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', handleFileSelect, false);
});

function handleFileSelect(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = e.target.result;
    var lines = contents.split('\n');
    var data = [];

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line !== '') {
        var row = line.split(',');
        data.push(row);
      }
    }

    drawChart(data);
  };

  reader.readAsText(file);
}

function drawChart(data) {
  var canvas = document.getElementById('chartCanvas');
  var ctx = canvas.getContext('2d');

  var chartWidth = canvas.width - 80;
  var barHeight = 40;
  var barSpacing = 10;
  var maxValue = Math.max(...data.map(row => parseInt(row[1])));
  var scale = chartWidth / maxValue;

  ctx.fillStyle = 'blue';
  for (var i = 0; i < data.length; i++) {
    var value = parseInt(data[i][1]);
    var barWidth = value * scale;
    var x = 10;
    var y = (barHeight + barSpacing) * i;

    ctx.fillRect(x, y, barWidth, barHeight);

    // Display value next to the bar
    ctx.fillStyle = 'black';
    ctx.fillText(data[i][0], x + barWidth + 10, y + barHeight - 10);
  }
}
