export function changeArr(index, newPlace, arr) {
  const newArr = [...arr];
  newArr[newPlace] = arr[index];
  newArr[index] = arr[newPlace];

  return newArr;
}
