const fs = require('fs');

export function readFileLines(filename: string): string [] {
    return fs.readFileSync(filename).toString().split("\n");
}


