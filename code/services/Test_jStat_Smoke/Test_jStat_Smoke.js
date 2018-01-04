EXPECTED = 1
function Test_jStat_Smoke(req, resp){
    try{
        var mean = jStat.mean([0,1,2])
        if(mean !== EXPECTED){
            resp.error("jStat failed smoke test")
        }
        resp.success("Success")
    }
    catch(e){
        resp.error("Failed to resolve jStat: " + JSON.stringify(e))
    }
}