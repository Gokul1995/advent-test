const fs = require('fs');

const readFileLines = (filename: string): string [] =>
  fs.readFileSync(filename).toString().split("\n");


export { readFileLines };

