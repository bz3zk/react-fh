const myArray:number[] = [1, 2, 3, 5, 6];
const myArrayofNumbers = structuredClone(myArray);

myArrayofNumbers.push(7);

console.log({myArray, myArrayofNumbers});