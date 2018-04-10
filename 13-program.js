var http = require('http')
var url = require('url')

var port = process.argv[2]

var server=http.createServer(function(request, response){
    var json = url.parse(request.url, true),
    path = json.pathname,
    startTime = json.query.iso,
    result;
    
    if (path === '/api/parsetime' ){
        result = getTimeObj(startTime);
    }
    else if (path === '/api/unixtime') {
        result = getUnixTimeStamp(startTime)
    }

    if (result){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(result));
    } else {
        response.writeHead(404);
        response.end();
    }
})

server.listen(port)

function getUnixTimeStamp(startTime){
    return {
        unixtime: getTimeStamp(startTime)
    };
}

function getTimeStamp(startTime) {
    return Date.parse(startTime);
}

function getTimeObj(startTime){
    var date = new Date(getTimeStamp(startTime));
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}
