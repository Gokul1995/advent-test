const { readFileLines } = require("../helpers/readFile.utilil");
let count : number = 0;

let numberArrayFromString = readFileLines("src/day1/input.txt").map((str: string) : number => {
  return Number(str);
});

numberArrayFromString.forEach((currentItem: number, index: number, prevArray: []) => {

  if (currentItem > prevArray[index - 1]) {
    count++;
  }
});

console.log("Count : ", count);
