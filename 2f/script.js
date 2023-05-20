window.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', handleFileSelect, false);
});

function handleFileSelect(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = e.target.result;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(contents, 'text/xml');
    var data = extractDataFromXML(xmlDoc);

    drawDataTable(data);
  };

  reader.readAsText(file);
}

function extractDataFromXML(xmlDoc) {
  var data = [];
  var rows = xmlDoc.getElementsByTagName('row');

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var rowData = [];
    var cells = row.getElementsByTagName('cell');

    for (var j = 0; j < cells.length; j++) {
      var cellData = cells[j].textContent;
      rowData.push(cellData);
    }

    data.push(rowData);
  }

  return data;
}

function drawDataTable(data) {
  var canvas = document.getElementById('dataTableCanvas');
  var ctx = canvas.getContext('2d');

  var rowHeight = 30;
  var colWidth = canvas.width / data[0].length;

  ctx.font = '14px Arial';
  ctx.fillStyle = 'black';

  for (var i = 0; i < data.length; i++) {
    var row = data[i];

    for (var j = 0; j < row.length; j++) {
      var cell = row[j];
      var x = j * colWidth;
      var y = (i + 1) * rowHeight;

      ctx.fillText(cell, x, y);
    }
  }
}
