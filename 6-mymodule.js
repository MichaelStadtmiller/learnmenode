var fs = require('fs')
var path = require('path')

module.exports = function (myfolder, myfilter, callback) {
    fs.readdir(myfolder, function (err, contents) {
        myfilter = "." + myfilter
        if (err) return callback(err)
        contents = contents.filter(function (file){
            return path.extname(file) === myfilter
        })
        callback(null, contents)
    })
}

