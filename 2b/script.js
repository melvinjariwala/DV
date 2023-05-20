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
        var row = line.split('\t'); // Modify this line if the values are separated by a different delimiter
        data.push(row);
      }
    }

    drawTable(data);
  };

  reader.readAsText(file);
}

function drawTable(data) {
  var canvas = document.getElementById('chartCanvas');
  var ctx = canvas.getContext('2d');

  var cellWidth = 100;
  var cellHeight = 30;

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    for (var j = 0; j < row.length; j++) {
      var cell = row[j];
      var x = j * cellWidth;
      var y = i * cellHeight;

      ctx.strokeRect(x, y, cellWidth, cellHeight);
      ctx.fillText(cell, x + 5, y + 20);
    }
  }
}
