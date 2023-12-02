import { generateRandomNumber } from "./generateRandomNumber";

export function getRandomArrNumber(sizeArr) {
  const result = [];
  for (let i = 0; i < sizeArr; i++) {
    let tempNumber = generateRandomNumber(sizeArr);
    while (result.includes(tempNumber)) {
      tempNumber = generateRandomNumber(sizeArr);
    }
    result.push(tempNumber);
  }
  return result;
}
