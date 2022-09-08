import { readFileLines } from "../../helpers/readFile.utilil";

let commandArray = readFileLines("src/day2/problem-1/input.txt").map(
  (str: string) => {
    return str;
  }
);

// sample data
// let commandArray = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]

let horizontalDistance = 0;
let verticalDistance = 0;

commandArray.forEach((item: string, index: number) => {
    
  let commandValueArray: Array<string> = item.split(" ");
  let distance = parseInt(commandValueArray[1]);

  switch (commandValueArray[0]) {
    case "forward":
      horizontalDistance += distance;
      break;

    case "down":
      verticalDistance += distance;
      break;
    case "up":
      verticalDistance -= distance;
      break;
    default:
      break;
  }
});

console.log("final horizontal distance : ", horizontalDistance);
console.log("final vertical distance : ", verticalDistance);
console.log("Expected output : ", 1427868);
console.log("Result : ", horizontalDistance * verticalDistance);
