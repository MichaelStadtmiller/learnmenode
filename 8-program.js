var http = require('http')
var url = process.argv[2]
var mydata = []

callback = function(resp){
    resp.on('error', function(e){
        console.log('error message ' + e.message);
    })
    resp.on('data', function(d){
        mydata.push(d.toString())
    })
    resp.on('end', function(){
        var a = mydata.join("")
        console.log(a.length);
        console.log(a);
    })
}

http.get(url, callback);

