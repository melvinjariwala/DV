// Load the Visualization API and the corechart package
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Charts library is loaded
google.charts.setOnLoadCallback(drawDashboard);

function drawDashboard() {
  // Create the data for each chart
  var data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'Category');
  data1.addColumn('number', 'Value');
  data1.addRows([
    ['A', 100],
    ['B', 200],
    ['C', 300]
  ]);

  var data2 = new google.visualization.DataTable();
  data2.addColumn('string', 'Category');
  data2.addColumn('number', 'Value');
  data2.addRows([
    ['X', 500],
    ['Y', 700],
    ['Z', 900]
  ]);

  var data3 = new google.visualization.DataTable();
  data3.addColumn('string', 'Category');
  data3.addColumn('number', 'Value');
  data3.addRows([
    ['Red', 50],
    ['Green', 70],
    ['Blue', 90]
  ]);

  var data4 = new google.visualization.DataTable();
  data4.addColumn('string', 'Category');
  data4.addColumn('number', 'Value');
  data4.addRows([
    ['Apple', 10],
    ['Banana', 20],
    ['Orange', 30]
  ]);

  var data5 = new google.visualization.DataTable();
  data5.addColumn('string', 'Category');
  data5.addColumn('number', 'Value');
  data5.addRows([
    ['One', 400],
    ['Two', 600],
    ['Three', 800]
  ]);

  // Create the charts
  var chart1 = new google.visualization.PieChart(document.getElementById('chart1'));
  var chart2 = new google.visualization.LineChart(document.getElementById('chart2'));
  var chart3 = new google.visualization.ColumnChart(document.getElementById('chart3'));
  var chart4 = new google.visualization.AreaChart(document.getElementById('chart4'));
  var chart5 = new google.visualization.BarChart(document.getElementById('chart5'));

  // Set the chart options
  var options = {
    title: 'Chart Title',
    width: 400,
    height: 300,
    legend: { position: 'none' },
    hAxis: { title: 'X-Axis' },
    vAxis: { title: 'Y-Axis' }
  };

  // Draw the charts
  chart1.draw(data1, options);
  chart2.draw(data2, options);
  chart3.draw(data3, options);
  chart4.draw(data4, options);
  chart5.draw(data5, options);
}
