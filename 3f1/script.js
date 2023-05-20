document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { label: "Category 1", value: 50 },
    { label: "Category 2", value: 75 },
    { label: "Category 3", value: 30 },
    { label: "Category 4", value: 60 },
    { label: "Category 5", value: 45 }
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
    .domain(data.map(function(d) { return d.label; }));

  var yScale = d3.scaleLinear()
    .range([chartHeight, 0])
    .domain([0, d3.max(data, function(d) { return d.value; })]);

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(d.label); })
    .attr("width", xScale.bandwidth())
    .attr("y", function(d) { return yScale(d.value); })
    .attr("height", function(d) { return chartHeight - yScale(d.value); })
    .attr("fill", "steelblue");

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
    data: [{
      type: "column",
      dataPoints: data.map(function(d) {
        return { label: d.label, y: d.value };
      })
    }]
  });

  chart.render();
});
