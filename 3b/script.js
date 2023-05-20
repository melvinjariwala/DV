document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { label: "Category 1", values: [50, 30, 20] },
    { label: "Category 2", values: [75, 45, 30] },
    { label: "Category 3", values: [30, 20, 15] },
    { label: "Category 4", values: [60, 40, 25] },
    { label: "Category 5", values: [45, 35, 20] }
  ];

  // Using D3.js to create the chart
  var svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var chartWidth = document.getElementById("chartContainer").clientWidth;
  var chartHeight = document.getElementById("chartContainer").clientHeight;

  var stack = d3.stack().keys(["values"]);

  var series = svg.selectAll(".series")
    .data(stack(data))
    .enter().append("g")
    .attr("class", "series")
    .attr("fill", function(d, i) { return "steelblue"; });

  series.selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
    .attr("x", function(d, i) { return i * (chartWidth / data.length); })
    .attr("y", function(d) { return chartHeight - d[1]; })
    .attr("width", chartWidth / data.length - 10)
    .attr("height", function(d) { return d[1] - d[0]; });

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    axisY: {
      title: "Value"
    },
    data: data.map(function(d, i) {
      return {
        type: "stackedColumn",
        showInLegend: true,
        name: d.label,
        dataPoints: d.values.map(function(value, j) {
          return { label: "Series " + (j + 1), y: value };
        })
      };
    })
  });

  chart.render();
});