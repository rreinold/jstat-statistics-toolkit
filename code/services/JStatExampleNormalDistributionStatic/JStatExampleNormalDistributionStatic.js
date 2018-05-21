/**
 * This example Use static dataset and builds a model 
 * It uses the more than one methods from jStat-toolkit which can referred at: 
 *  jStat.mean - http://jstat.github.io/all.html#mean
 *  jStat.stdev - http://jstat.github.io/all.html#stdev
 *  jStat.normal - http://jstat.github.io/all.html#jStat.normal
 */
function JStatExampleNormalDistributionStatic(req, resp){
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