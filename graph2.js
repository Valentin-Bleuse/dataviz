let widthG2 = "100%";
let heightG2 = "100%";



let svgG2 = d3.select('#graph2')
    .append('svg')
    .attr('width', widthG2)
    .attr('height', heightG2)
    .attr('viewBox', '-50 -300 700 50')
    .append('g')
    .attr("transform", "translate(0,-50)");

d3.json('stats.json', function (data) {
    let monGraph2 = data[1];
    console.log(monGraph2);
    let line1G2 = "M0," + (monGraph2.donnees1[0] * (-2) + 540);
    let line2G2 = "M0," + (monGraph2.donnees2[0] * (-6) - 50);



    monGraph2.donnees1.forEach(function (d, i) {
        svgG2.append("circle")
            .attr('cx', i * (600 / 41))
            .attr('cy', ((-d * 2) + 540))
            .attr('r', '3')
            .attr('fill', 'rgb(0, 172, 172)');
        line1G2 = line1G2 + "L" + i * (600 / 41) + "," + ((-d * 2) + 540);
    });
    svgG2.append('path')
        .attr('d', line1G2)
        .style('stroke-width', '3')
        .style('fill', 'none')
        .attr('stroke', 'rgb(0, 172, 172)')
        .on('mouseover', function (d, i) {
            d3.select(this).transition()
                 .duration('150')
                 .attr('stroke', 'cyan')})
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                 .duration('150')
                 .attr('stroke', 'rgb(0, 172, 172)')});

    monGraph2.donnees2.forEach(function (d, i) {
        svgG2.append("circle")
            .attr('cx', i * (600 / 41))
            .attr('cy', ((-d * 6) - 50))
            .attr('r', '3')
            .attr('fill', 'rgb(172, 0, 0)');
        line2G2 = line2G2 + "L" + i * (600 / 41) + "," + ((-d * 6) - 50);
    });
    svgG2.append('path')
        .attr('d', line2G2)
        .style('stroke-width', '3')
        .style('fill', 'none')
        .attr('stroke', 'rgb(172, 0, 0)')
        .on('mouseover', function (d, i) {
            d3.select(this).transition()
                 .duration('150')
                 .attr('stroke', 'red')})
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                 .duration('150')
                 .attr('stroke', 'rgb(172, 0, 0)')});


    let xG2 = d3.axisBottom(d3.scaleLinear()
        .domain([1975, 2016])
        .range([0, 600]))
        .ticks(20)
        .tickFormat(d3.format('d'));
    svgG2.append("g")
        .attr("transform", "translate(0,-100)")
        .call(xG2);

    let y1G2 = d3.axisLeft(d3.scaleLinear()
        .domain([330, 430])
        .range([-100, -300]))
        .ticks(5)
    svgG2.append("g")
        .call(y1G2);

    let y2G2 = d3.axisRight(d3.scaleLinear()
        .domain([10, 40])
        .range([-100, -300]))
        .ticks(8)
    svgG2.append("g")
        .attr("transform", "translate(600,0)")
        .call(y2G2);
});
