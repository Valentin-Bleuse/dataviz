let width = "100%";
let height = "100%";



let svg = d3.selectAll('.graph1')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', '-50 -300 700 50')
    .append('g')
    .attr("transform", "translate(0,-50)");

d3.json('scripts/stats.json', function (data) {
    let monGraph = data[2];
    console.log(monGraph);
    let line1 = "M0," + monGraph.donnees1[0] * (-100);
    let line2 = "M0," + (monGraph.donnees2[0] * (-100) + 600);



    monGraph.donnees1.forEach(function (d, i) {
        svg.append("circle")
            .attr('cx', i * 100)
            .attr('cy', -d * 100)
            .attr('r', '3')
            .attr('fill', 'cyan');
        line1 = line1 + "L" + i * 100 + "," + (-d) * 100;
    });
    svg.append('path')
        .attr('d', line1)
        .style('stroke-width', '3')
        .style('fill', 'none')
        .attr('stroke', 'cyan');

    monGraph.donnees2.forEach(function (d, i) {
        svg.append("circle")
            .attr('cx', i * 100)
            .attr('cy', -d * 100 + 600)
            .attr('r', '3')
            .attr('fill', 'red');
        line2 = line2 + "L" + i * 100 + "," + ((-d) * 100 + 600);
    });
    svg.append('path')
        .attr('d', line2)
        .style('stroke-width', '3')
        .style('fill', 'none')
        .attr('stroke', 'red');


    let x = d3.axisBottom(d3.scaleLinear()
        .domain([2010, 2016])
        .range([0, 600]))
        .ticks(7)
        .tickFormat(d3.format('d'));
    svg.append("g")
        .attr("transform", "translate(0,-100)")
        .call(x);

    let y1 = d3.axisLeft(d3.scaleLinear()
        .domain([1.0, 3.0])
        .range([-100, -300]))
        .ticks(10)
    svg.append("g")
        .call(y1);

    let y2 = d3.axisRight(d3.scaleLinear()
        .domain([7.0, 9.0])
        .range([-100, -300]))
        .ticks(10)
    svg.append("g")
        .attr("transform", "translate(600,0)")
        .call(y2);
});