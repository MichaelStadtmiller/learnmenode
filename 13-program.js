var http = require('http')
var url = require('url')

var port = process.argv[2]

var server=http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'application/json'});
    var json = url.parse(request.url, true)
    if (json['pathname'] === '/api/parsetime' ){
        var time = new Date().toISOString(json['search']) 
        //need to break out year. month, day into json and return
    }
    //else if the other path
        //return whatever that thing needs
    // server sticks around. need it to stop after receiving the requests.
})

server.listen(port)
