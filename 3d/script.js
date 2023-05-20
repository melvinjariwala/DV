document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { x: 1, y: 50 },
    { x: 2, y: 75 },
    { x: 3, y: 30 },
    { x: 4, y: 60 },
    { x: 5, y: 45 }
  ];

  // Using D3.js to create the chart
  var svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var chartWidth = document.getElementById("chartContainer").clientWidth;
  var chartHeight = document.getElementById("chartContainer").clientHeight;

  var xScale = d3.scaleLinear()
    .domain([1, 5])
    .range([0, chartWidth]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.y; })])
    .range([chartHeight, 0]);

  var line = d3.line()
    .x(function(d) { return xScale(d.x); })
    .y(function(d) { return yScale(d.y); });

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      title: "X-Axis"
    },
    axisY: {
      title: "Y-Axis"
    },
    data: [{
      type: "line",
      dataPoints: data.map(function(d) {
        return { x: d.x, y: d.y };
      })
    }]
  });

  chart.render();
});