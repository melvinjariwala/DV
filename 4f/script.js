document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { x: 10, y: 50 },
    { x: 20, y: 70 },
    { x: 30, y: 40 },
    { x: 40, y: 60 },
    { x: 50, y: 80 }
  ];

  // Using D3.js to create the chart
  var svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var chartWidth = document.getElementById("chartContainer").clientWidth;
  var chartHeight = document.getElementById("chartContainer").clientHeight;

  var xScale = d3.scaleLinear()
    .range([0, chartWidth])
    .domain([0, d3.max(data, function(d) { return d.x; })]);

  var yScale = d3.scaleLinear()
    .range([chartHeight, 0])
    .domain([0, d3.max(data, function(d) { return d.y; })]);

  svg.selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("cx", function(d) { return xScale(d.x); })
    .attr("cy", function(d) { return yScale(d.y); })
    .attr("r", 5)
    .attr("fill", "steelblue");

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      title: "X"
    },
    axisY: {
      title: "Y"
    },
    data: [{
      type: "scatter",
      markerType: "circle",
      markerSize: 8,
      toolTipContent: "X: {x}, Y: {y}",
      dataPoints: data.map(function(d) {
        return { x: d.x, y: d.y };
      })
    }]
  });

  chart.render();
});