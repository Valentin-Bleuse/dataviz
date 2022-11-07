let widthG3 = "100%";
let heightG3 = "100%";



let svgG3 = d3.select('#graph3')
    .append('svg')
    .attr('width', widthG3)
    .attr('height', heightG3)
    .attr('viewBox', '-50 -300 700 50')
    .append('g')
    .attr("transform", "translate(0,-50)");

d3.json('scripts/graphiques/stats.json', function (data) {
    let monGraph3 = data[3];
    console.log(monGraph3);
    let line1G3 = "M0," + (monGraph3.donnees1[0] * (-12) + 270);
    let line2G3 = "M0," + (monGraph3.donnees2[0] * (-12) + 270);



    monGraph3.donnees1.forEach(function (d, i) {
        svgG3.append("circle")
            .attr('cx', i * (600 / 6))
            .attr('cy', ((-d * 12) + 270))
            .attr('r', '3')
            .attr('fill', 'rgb(0, 172, 172)');
        line1G3 = line1G3 + "L" + i * (600 / 6) + "," + ((-d * 12) + 270);
    });
    svgG3.append('path')
        .attr('d', line1G3)
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

    monGraph3.donnees2.forEach(function (d, i) {
        svgG3.append("circle")
            .attr('cx', i * (600 / 6))
            .attr('cy', ((-d * 12) + 270))
            .attr('r', '3')
            .attr('fill', 'rgb(172, 0, 0)');
        line2G3 = line2G3 + "L" + i * (600 / 6) + "," + ((-d * 12) + 270);
    });
    svgG3.append('path')
        .attr('d', line2G3)
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

    let xG3 = d3.axisBottom(d3.scaleLinear()
        .domain([1961, 1983])
        .range([0, 600]))
        .ticks(7)
        .tickFormat(d3.format('d'));
    svgG3.append("g")
        .attr("transform", "translate(0,-100)")
        .call(xG3);

    let y1G3 = d3.axisLeft(d3.scaleLinear()
        .domain([30, 50])
        .range([-100, -300]))
        .ticks(5)
    svgG3.append("g")
        .call(y1G3);

    let y2G3 = d3.axisRight(d3.scaleLinear()
        .domain([30, 50])
        .range([-100, -300]))
        .ticks(5)
    svgG3.append("g")
        .attr("transform", "translate(600,0)")
        .call(y2G3);
});