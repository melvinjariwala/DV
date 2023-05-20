document.addEventListener("DOMContentLoaded", function() {
  var data = [
    { ageGroup: "0-18", count: 50 },
    { ageGroup: "19-35", count: 75 },
    { ageGroup: "36-50", count: 30 },
    { ageGroup: "51+", count: 60 }
  ];

  // Using D3.js to create the chart
  var svg = d3.select("#chartContainer")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  var chartWidth = document.getElementById("chartContainer").clientWidth;
  var chartHeight = document.getElementById("chartContainer").clientHeight;

  var xScale = d3.scaleBand()
    .domain(data.map(function(d) { return d.ageGroup; }))
    .range([0, chartWidth])
    .padding(0.1);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.count; })])
    .range([chartHeight, 0]);

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xScale(d.ageGroup); })
    .attr("y", function(d) { return yScale(d.count); })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) { return chartHeight - yScale(d.count); })
    .attr("fill", "steelblue");

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    axisX: {
      title: "Age Group"
    },
    axisY: {
      title: "Count"
    },
    data: [{
      type: "column",
      dataPoints: data.map(function(d) {
        return { label: d.ageGroup, y: d.count };
      })
    }]
  });

  chart.render();
});

