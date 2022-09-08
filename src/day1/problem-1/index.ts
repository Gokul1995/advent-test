import {readFileLines} from '../../helpers/readFile.utilil';

let count : number = 0;

let numberArrayFromString = readFileLines("src/day1/problem-1/input.txt").map((str: string) : number => {
  return Number(str);
});

numberArrayFromString.forEach((currentItem: number, index: number) => {

  if (currentItem > numberArrayFromString[index - 1]) {
    count++;
  }
});

console.log("Count : ", count);
console.log("Final Result : ", 1527);
