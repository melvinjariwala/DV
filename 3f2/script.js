document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { category: "Category 1", values: [50, 75, 30, 60, 45] },
    { category: "Category 2", values: [65, 42, 80, 55, 70] },
    { category: "Category 3", values: [30, 60, 45, 50, 35] }
  ];

  // Using D3.js to create the chart
  var svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var chartWidth = document.getElementById("chartContainer").clientWidth;
  var chartHeight = document.getElementById("chartContainer").clientHeight;

  var xScale = d3.scaleBand()
    .range([0, chartWidth])
    .padding(0.1)
    .domain(data.map(function(d) { return d.category; }));

  var yScale = d3.scaleLinear()
    .range([chartHeight, 0])
    .domain([0, d3.max(data, function(d) { return d3.max(d.values); })]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  svg.selectAll(".bar-group")
    .data(data)
    .enter().append("g")
    .attr("class", "bar-group")
    .attr("transform", function(d) {
      return "translate(" + xScale(d.category) + ", 0)";
    })
    .selectAll("rect")
    .data(function(d) { return d.values; })
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return xScale.bandwidth() / data.length * i; })
    .attr("width", xScale.bandwidth() / data.length)
    .attr("y", function(d) { return yScale(d); })
    .attr("height", function(d) { return chartHeight - yScale(d); })
    .attr("fill", function(d, i) { return color(i); });

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      title: "Category"
    },
    axisY: {
      title: "Value"
    },
    data: data.map(function(d, i) {
      return {
        type: "column",
        name: d.category,
        showInLegend: true,
        dataPoints: d.values.map(function(value, j) {
          return { label: "Value " + (j + 1), y: value };
        }),
        color: color(i)
      };