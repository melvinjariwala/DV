// Get the file input element and canvas element
const fileInput = document.getElementById('file-input');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Add an event listener to the file input element
fileInput.addEventListener('change', handleFileUpload, false);

// Function to handle the file upload
function handleFileUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  // Event listener for when the file is loaded
  reader.onload = function (event) {
    const contents = event.target.result;
    const jsonData = JSON.parse(contents);

    // Draw the data table on the canvas
    drawDataTable(jsonData);
  };

  // Read the file as text
  reader.readAsText(file);
}

// Function to draw the data table on the canvas
function drawDataTable(jsonData) {
  // Define the table dimensions and styles
  const tableWidth = 400;
  const tableHeight = 300;
  const cellPadding = 10;
  const cellWidth = (tableWidth - cellPadding * 2) / Object.keys(jsonData[0]).length;
  const cellHeight = 30;

  // Set the canvas dimensions
  canvas.width = tableWidth;
  canvas.height = tableHeight;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw table header
  ctx.fillStyle = 'lightgray';
  ctx.fillRect(0, 0, tableWidth, cellHeight);

  // Draw table rows
  let yPos = cellHeight;
  for (let i = 0; i < jsonData.length; i++) {
    ctx.fillStyle = i % 2 === 0 ? 'white' : 'lightgray';
    ctx.fillRect(0, yPos, tableWidth, cellHeight);

    // Draw row cells
    let xPos = cellPadding;
    Object.keys(jsonData[i]).forEach((key) => {
      ctx.fillStyle = 'black';
      ctx.fillText(jsonData[i][key], xPos, yPos + cellHeight / 2);
      ctx.strokeStyle = 'black';
      ctx.strokeRect(xPos, yPos, cellWidth, cellHeight);
      xPos += cellWidth;
    });

    yPos += cellHeight;
  }
}
