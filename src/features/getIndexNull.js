export function getIndexNull(arr) {
  let result = null;
  arr.forEach((element, i) => {
    if (element.image === null) result = i;
  });
  return result;
}
