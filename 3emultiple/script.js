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

  var radius = Math.min(chartWidth, chartHeight) / 2;

  var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

  var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.value; });

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var arcs = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

  arcs.append("path")
    .attr("d", arc)
    .attr("fill", function(d) { return color(d.data.label); });

  // Using Canvas.js to create the chart
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      dataPoints: data.map(function(d) {
        return { label: d.label, y: d.value };
      })
    }]
  });

  chart.render();
});