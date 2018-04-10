var fs = require('fs')
var path = require('path')

var array = []

function filelist(callback) {
    fs.readdir(process.argv[2], function doit(err, contents) {
        array = contents
        callback()
    })
}

function printit () {
    var target = "." + process.argv[3]
    for (var i=0, len=array.length; i < len; i++ ) {
        var ext = path.extname(array[i])
        if (ext == target){
            console.log(array[i])
        }
    }   
}

filelist(printit)