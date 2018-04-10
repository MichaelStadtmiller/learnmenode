var fs = require('fs')
var array = []

function numlines(callback) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        array = fileContents.toString().split('\n')
        callback()
    })
}

function printit () {
    console.log(array.length-1)
}

numlines(printit)