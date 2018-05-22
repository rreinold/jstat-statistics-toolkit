/**
 * This example creates a normal deviate dataset
 * 
 */
function JStatExampleNormalDeviate(req, resp){
    Y_OFFSET = 2
    var random = jStat.randn(1,100)
    var output = random[0].map(function(y,x){
        var point = {
            x,
            y
        }
        return point
    })
    resp.success(output)
}