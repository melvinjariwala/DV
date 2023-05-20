window.onload = function () {
   var dataPoints = [];

   // Function to handle file selection
   function handleFileSelect(event) {
     var file = event.target.files[0];
     var reader = new FileReader();

     reader.onload = function(e) {
       var contents = e.target.result;
       var xmlDoc = $.parseXML(contents);
       var $xml = $(xmlDoc);
       $xml.find("point").each(function () {
         var $dataPoint = $(this);
         var x = $dataPoint.find("x").text();
         var y = $dataPoint.find("y").text();
         dataPoints.push({ x: parseFloat(x), y: parseFloat(y) });
       });

       renderChart();
     };

     reader.readAsText(file);
   }

   // Render chart with the data points
   function renderChart() {
     var chart = new CanvasJS.Chart("chartContainer", {
       title: {
         text: "Chart Using XML Data",
       },
       data: [{
         type: "column",
         dataPoints: dataPoints,
       }]
     });
     chart.render();
   }

   // Listen for file input change event
   var fileInput = document.getElementById('fileInput');
   fileInput.addEventListener('change', handleFileSelect, false);
 };