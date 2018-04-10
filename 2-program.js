x = process.argv
sum = 0
for(var i = 2, len = x.length; i < len; i++)
    sum += Number(x[i])
console.log(sum)