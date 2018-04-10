var mymodule = require('./6-mymodule.js')
var folder = process.argv[2]
var filter = process.argv[3]

mymodule(folder,filter,function(err,list){
    if (err) return console.error(err)

    list.forEach(function (file) {
        console.log(file)
    })   
});
