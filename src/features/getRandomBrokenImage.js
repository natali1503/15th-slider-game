import getBrokenImage from "./getBrokenImage";
import { getRandomArrNumber } from "./randomNumber/getRandomArrNumber";

export async function getRandomBrokenImage(size, imagePath) {
  const arrBrokenImage = await getBrokenImage(imagePath, size);
  const arrRandomNumber = getRandomArrNumber(size);

  const arrImgObj = arrBrokenImage[0].reduce((acc, img, i) => {
    // if (i === size - 1) acc.push({ number: i, image: null });
    // else {
    acc.push({ number: i, image: img });
    // }
    return acc;
  }, []);
  const temp = arrRandomNumber.reduce((acc, randomNumber, i) => {
    acc.push(arrImgObj[randomNumber]);
    return acc;
  }, []);
  const result = temp.filter((imgObj) => imgObj.number !== size - 1);
  result.push({ number: size - 1, image: null });
  return result;
}
