document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { label: "Category 1", values: [50, 30, 20, 40] },
    { label: "Category 2", values: [75, 45, 30, 60] },
    { label: "Category 3", values: [30, 20, 15, 25] },
    { label: "Category 4", values: [60, 40, 25, 50] },
    { label: "Category 5", values: [45, 35, 20, 30] }
  ];

  // Using D3.js to create the chart
  var svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var chartWidth = document.getElementById("chartContainer").clientWidth;
  var chartHeight = document.getElementById("chartContainer").clientHeight;

  var xScale = d3.scaleLinear()
    .domain([0, data[0].values.length - 1])
    .range([0, chartWidth]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d3.max(d.values); })])
    .range([chartHeight, 0]);

  var line = d3.line()
    .x(function(d, i) { return xScale(i); })
    .y(function(d) { return yScale(d); });

  svg.selectAll(".line")
    .data(data)
    .enter().append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line(d.values); })
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      title: "Data Point"
    },
    axisY: {
      title: "Value"
    },
    data: data.map(function(d) {
      return {
        type: "line",
        name: d.label,
        dataPoints: d.values.map(function(value, i) {
          return { x: i, y: value };
        })
      };
    })
  });

  chart.render();
});
