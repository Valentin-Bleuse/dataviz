let width = "100%";
let height = "100%";



let svg = d3.selectAll('.graph1')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', '-50 -300 700 50')
    .append('g')
    .attr("transform", "translate(0,-50)");

d3.json('scripts/graphiques/stats.json', function (data) {
    let monGraph = data[2];
    console.log(monGraph);
    // On initialise le tracé de la courbe au premier point
    let line1 = "M0," + monGraph.donnees1[0] * (-100);
    let line2 = "M0," + (monGraph.donnees2[0] * (-100) + 600);



    monGraph.donnees1.forEach(function (d, i) {
        // On crée les points
        svg.append("circle")
            .attr('cx', i * 100)
            .attr('cy', -d * 100)
            .attr('r', '3')
            .attr('fill', 'rgb(0, 172, 172)');
        // À chaque point créé, on continue le tracé de la courbe du dernier jusqu'au nouveau
        line1 = line1 + "L" + i * 100 + "," + (-d) * 100;
    });

        // On affiche la courbe
    svg.append('path')
        .attr('d', line1)
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

    monGraph.donnees2.forEach(function (d, i) {
        svg.append("circle")
            .attr('cx', i * 100)
            .attr('cy', -d * 100 + 600)
            .attr('r', '3')
            .attr('fill', 'rgb(172, 0, 0)');
        line2 = line2 + "L" + i * 100 + "," + ((-d) * 100 + 600);
    });
    svg.append('path')
        .attr('d', line2)
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