import {readFileLines} from '../../helpers/readFile.utilil';

let depthCountArray = readFileLines("src/day1/problem-2/input-2.txt").map((str: string) : number => {
    return Number(str);
  });
console.log('depthCountArray length : ', depthCountArray.length)

let count = 0;
// let depthCountArray = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]; //sample data

depthCountArray.forEach((currentValue: number, index: number) => {
    
    if (!depthCountArray[index+1]) {
        console.log("return from", index); 
        return;
    }

    let firstThreeMeasure = currentValue + depthCountArray[index + 1] + depthCountArray[index+2];
    let secondThreeMeasure = depthCountArray[index + 1] + depthCountArray[index+2] + depthCountArray[index+3];
    
    if (firstThreeMeasure < secondThreeMeasure) {
        count++;
    };

});

console.log("count value : ", count);


console.log("Final Result : ", 1575);
