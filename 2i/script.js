// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get the input and canvas elements
  const uploadFile = document.getElementById('uploadFile');
  const chartCanvas = document.getElementById('chartCanvas');
  const ctx = chartCanvas.getContext('2d');

  // Add an event listener for file upload
  uploadFile.addEventListener('change', handleFileUpload);

  // Function to handle file upload
  function handleFileUpload(event) {
    const file = event.target.files[0];

    // Check if the uploaded file is a JSON file
    if (file.type === 'application/json') {
      const reader = new FileReader();

      // Read the file content
      reader.readAsText(file);

      // Callback function for when the file is loaded
      reader.onload = function (event) {
        const jsonData = JSON.parse(event.target.result);
        drawChart(jsonData);
      };
    } else {
      alert('Please upload a JSON file.');
    }
  }

  // Function to draw the chart
  function drawChart(data) {
    // Clear the canvas
    ctx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

    // Draw the chart based on the data
    // You can customize this part based on your data and chart type

    // Example: Draw bars based on data values
    const barWidth = 50;
    const startX = 50;
    let startY = chartCanvas.height - 50;

    data.forEach((item, index) => {
      const barHeight = item.value * 5; // Scaling factor to adjust the bar height
      const xPos = startX + index * (barWidth + 10);
      ctx.fillStyle = 'blue';
      ctx.fillRect(xPos, startY - barHeight, barWidth, barHeight);

      // Draw the data label
      ctx.fillStyle = 'black';
      ctx.fillText(item.label, xPos, startY + 20);
    });
  }
});