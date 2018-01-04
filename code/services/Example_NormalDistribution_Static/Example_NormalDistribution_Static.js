function Example_NormalDistribution_Static(req, resp){
    // [0,1,2,...,9]
    var x = jStat.seq(0,9,10)
    // Required for build distribution
    var config = {
        mean: jStat.mean(x),
        stdDev: jStat.stdev(x)
    }
    var points = x.map(function(x){
        return {
            x: x,
            y: jStat.normal.pdf(x, config.mean, config.stdDev)
        };
    })
    resp.success(points)
}