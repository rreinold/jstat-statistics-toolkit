Y_OFFSET = 2
function Example_NormalDeviate(req, resp){
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