var fs = require('fs');
var stringsArray = [];

function generateArray() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            stringsArray.push('BIG');
        }
        else if (i % 5 === 0) {
            stringsArray.push('BANG');
        }
        else {
            stringsArray.push(i.toString());
        }
    }
    return JSON.stringify(stringsArray);
}

var output = generateArray();

console.log(output);

fs.writeFileSync('output.json', output);
