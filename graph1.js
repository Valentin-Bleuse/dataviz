let width = 1500;
let height = 1000;
let facteur1 = 100;
let facteur2 = 50;



let svg = d3.select('#graph1')
    .append('svg')
        .attr('width', width)
        .attr('height', height)
    .append('g')
    .attr("transform",
          "translate(50,50)");

d3.json('/stats.json', function(data){
    let monGraph = data[2];
    console.log(monGraph);
    let line1 = "M0," + monGraph.donnees1[0]*facteur1;
    let line2 = "M0," + monGraph.donnees2[0]*facteur2;
    monGraph.donnees1.forEach(function(d,i){
        svg.append("circle")
            .attr('cx', i*100)
            .attr('cy', d*facteur1)
            .attr('r', '3')
            .attr('stroke', 'white');
            line1 = line1 + "L"+i*100+","+d*facteur1;
    });
    svg.append('path')
    .attr('d', line1)
    .style('stroke-width', '3')
    .style('fill', 'none')
    .attr('stroke', 'black');

    monGraph.donnees2.forEach(function(d,i){
        svg.append("circle")
            .attr('cx', i*100)
            .attr('cy', d*facteur2)
            .attr('r', '3')
            .attr('stroke', 'white')
            .attr('fill', 'red');
            line2 = line2 + "L"+i*100+","+d*facteur2;
    });
    svg.append('path')
    .attr('d', line2)
    .style('stroke-width', '3')
    .style('fill', 'none')
    .attr('stroke', 'red');


    let x = d3.axisBottom(d3.scaleLinear()
    .domain([2010, 2016]) // la plage de valeurs possibles 
    .range([0,  600])) // les coordonnées du début et de fin de l'axe
    .ticks(7)
    .tickFormat(d3.format('d'));
    svg.append("g")
    .attr("transform", "translate(0,500)")
    .call(x);

    let y1 = d3.axisLeft(d3.scaleLinear()
    .domain([1.0, 3.0]) // la plage de valeurs possibles 
    .range([500, 0])) // les coordonnées du début et de fin de l'axe
    .ticks(10)
    svg.append("g")
    // .attr("transform", "translate(0,500)")
    .call(y1);

    let y2 = d3.axisRight(d3.scaleLinear()
    .domain([7.0, 9.0]) // la plage de valeurs possibles 
    .range([500, 0])) // les coordonnées du début et de fin de l'axe
    .ticks(10)
    svg.append("g")
    .attr("transform", "translate(600,0)")
    .call(y2);

    // let y1 = d3.scaleLinear()
    //   .domain( [1.0,3.0])
    //   .range([ 500, 0 ]);
    // svg.append("g")
    //   .call(d3.axisLeft(y1));

    //   let y2 = d3.scaleLinear()
    //   .domain( [7.0,9.0])
    //   .range([ 500, 0 ]);
    // svg.append("g")
    // .attr("transform", "translate(600,0)")
    //   .call(d3.axisLeft(y2));
});