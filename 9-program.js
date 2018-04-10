var http = require('http')
var bl = require('bl')
var myurls = [process.argv[2],process.argv[3],process.argv[4]]
var results = []
var count = 0
var urlLength = myurls.length;

function printit () {
    for (var u = 0; u < urlLength; u++) {
        console.log(results[u])
    }
}

function getit (u) {
    http.get(myurls[u], function (response) {
        response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        results[u] = data.toString()
        count++
        if(count === urlLength){
            printit()
        }
        }))
    })
};

for (var u=0; u<urlLength; u++)  {
    getit(u)
}