export function checkVictory(arr) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      arr[i].number - arr[i - 1].number === 1
        ? (result = true)
        : (result = false);
      // arr[i] - arr[i - 1] === 1 ? (result = true) : (result = false);
    }
    if (result === false && i > 0) {
      break;
    }
  }
  return result;
}
