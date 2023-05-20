window.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', handleFileSelect, false);
});

function handleFileSelect(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = e.target.result;
    var data = parseCSV(contents);
    drawChart(data);
  };

  reader.readAsText(file);
}

function parseCSV(contents) {
  var lines = contents.split('\n');
  var data = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line !== '') {
      var row = line.split(',');
      data.push(row);
    }
  }

  return data;
}

function drawChart(data) {
  var canvas = document.getElementById('chartCanvas');
  var ctx = canvas.getContext('2d');

  var chartHeight = canvas.height - 20;
  var chartWidth = canvas.width - 20;
  var barSpacing = 10;
  var maxValue = Math.max(...data.map(row => parseInt(row[1])));
  var scale = chartHeight / maxValue;
  var barWidth = (chartWidth - (barSpacing * (data.length - 1))) / data.length;

  ctx.fillStyle = 'blue';
  for (var i = 0; i < data.length; i++) {
    var value = parseInt(data[i][1]);
    var barHeight = value * scale;
    var x = (barWidth + barSpacing) * i;
    var y = canvas.height - barHeight;

    ctx.fillRect(x, y, barWidth, barHeight);

    // Display value above the bar
    ctx.fillStyle = 'black';
    ctx.fillText(value, x, y - 5);

    // Display label below the bar
    ctx.fillText(data[i][0], x, canvas.height + 2);
  }
}
