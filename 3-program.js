var fs = require('fs')
var x = fs.readFileSync(process.argv[2])
var array = x.toString().split('\n')
console.log(array.length-1)