let svg = d3.select('#graph1')
    .append('svg')
        .attr('width', '')
        .attr('height', '')
    .append('g');

d3.json('/stats.json', function(data){
    let monGraph = data[2];
    let allGroup = ["valeur1", "valeur2"]
    let dataReady = allGroup.map(function(grpName) {
        return {
            name: grpName,
            values: data.map(function(d){
                return {time: d.time, value: +d[grpName]};
            })
        };
    });
    console.log(dataReady);
});