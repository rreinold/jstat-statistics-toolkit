NUM_DATA_POINTS = 100
Y_OFFSET = 3
COLLECTION_NAME = "vibration_sensor_1"
function Example_GenerateData(req, resp){
    
    ClearBlade.init({request:req})
    var query = ClearBlade.Query()
    var collection = ClearBlade.Collection({collectionName:COLLECTION_NAME})
    collection.remove(query,function(err, data){
        if(err){
            log(data);
            resp.error(data)
        }
        generate()
    })
    
    function generate(){
        var random = jStat.randn(1,NUM_DATA_POINTS)
        var x = 0
        var output = random[0].map(function(y){
            var point = {
                x,
                y: Math.abs(y) + Y_OFFSET
            }
            x++
            return point
        })
        collection.create(output, function(err, data){
            if(err || !data || data.TOTAL != NUM_DATA_POINTS){
                var msg = "Failed to create " + NUM_DATA_POINTS + " data points: " + JSON.stringify(data)
            }
            resp.success(output)
        })
    }
    
}