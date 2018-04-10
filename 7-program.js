var http = require('http')
var url = process.argv[2]
http.get(url, function(resp){
    resp.on('error', function(e){
        console.log('error message ' + e.message);
    })
    resp.on('data', function(d) {
        console.log(d.toString())
    })
}).on('error', console.error);