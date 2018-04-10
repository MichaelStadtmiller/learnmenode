var net = require('net')
var stfr = require('strftime')
var port = process.argv[2]

var server=net.createServer(function(socket){
    var now=new Date()
    var localtime = stfr.localizeByIdentifier('en_US')

    socket.write(localtime('%Y-%m-%d %H:%M\n', now))
    socket.end()
})

server.listen(port)