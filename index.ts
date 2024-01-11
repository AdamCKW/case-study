const fs = require('fs')

const stringsArray: string[] = [];

function generateArray() {
    for (let i: number = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            stringsArray.push('BIG');
        } else if (i % 5 === 0) {
            stringsArray.push('BANG');
        } else {
            stringsArray.push(i.toString());
        }
    }
    return JSON.stringify(stringsArray);
}

const output = generateArray();

console.log(output);

fs.writeFileSync('output.json', output);