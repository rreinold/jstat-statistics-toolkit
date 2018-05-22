/**
 * This example Pull dataset from collection, build model.
 * It uses the more than one methods from jStat-toolkit which can referred at: 
 *  jStat.mean - http://jstat.github.io/all.html#mean
 *  jStat.stdev - http://jstat.github.io/all.html#stdev
 *  jStat.normal - http://jstat.github.io/all.html#jStat.normal
 *  jStat.weibull - http://jstat.github.io/all.html#jStat.weibull
 */
function JStatExampleNormalDistributionAdvanced(req, resp){
    COLLECTION_NAME = "vibration_sensor_1";
    var output = {
        normPdf:[],
        normCdf:[]
    }
    
    ClearBlade.init({request:req})
    ClearBlade.Collection({collectionName:COLLECTION_NAME}).fetch(function(err, data){
        if(err){
            log(data);
            resp.error(data)
        }
        var raw = data.DATA.sort(function(e1, e2){
            return e1.y > e2.y ? 0 : -1
        })
        var y = raw.map(function(e){
            return e.y
        })
        var config = {
            mean: jStat.mean(y),
            stdDev: jStat.stdev(y)
        }
        var normPdf = raw.map(function(e,i){
            return {
                x: e.y,
                y: jStat.normal.pdf(e.y, config.mean, config.stdDev / 2)
            }
        })
        var normCdf = raw.map(function(e,i){
            return {
                x: e.y,
                y: jStat.normal.cdf(e.y, config.mean, config.stdDev / 2)
            }
        })
        
        var weibullPdf = raw.map(function(e,i){
            return {
                x: e.y,
                y: jStat.weibull.pdf(e.y, 20, 1.0)//config.mean, config.stdDev / 2)
            }
        })
        
        var weibullPdf = raw.map(function(e,i){
            return {
                x: e.y,
                y: jStat.weibull.cdf(e.y, 20, 1.0)//config.mean, config.stdDev / 2)
            }
        })
        
        output = {
            normPdf,
            normCdf,
            weibullPdf
        }
        
        resp.success(output)
    })
}